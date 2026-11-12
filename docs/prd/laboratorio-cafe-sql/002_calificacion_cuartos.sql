-- Laboratorio de café · arreglo de calificación a cuartos de punto (DAV-94)
-- Correr DESPUÉS de borrar la prueba temporal.
begin;

drop function if exists public.lab_publico();
drop view if exists lab.v_candidatos;
drop view if exists lab.v_pruebas;

alter table lab.pruebas alter column calificacion type numeric(4,2);
alter table lab.pruebas add constraint calificacion_cuartos
  check (calificacion is null or (calificacion * 4) = trunc(calificacion * 4));

create view lab.v_pruebas with (security_invoker = true) as
select
  p.*,
  case when p.metodo = 'espresso' then 'espresso' else 'filtrado' end as familia,
  round(coalesce(p.agua_g, p.rendimiento_g) / p.dosis_g, 2) as ratio,
  (p.fecha at time zone 'America/Mexico_City')::date - c.fecha_tueste as dias_desde_tueste,
  round(p.dosis_g * c.precio_mxn / c.peso_g, 2) as costo_cafe_bebida_mxn,
  case when p.metodo = 'espresso' and p.tiempo_total_s is not null
       then p.tiempo_total_s - coalesce(p.preinfusion_total_s, 0) end as extraccion_s,
  c.nombre as cafe_nombre, c.tostador, c.origen, c.proceso, c.variedad, c.fecha_tueste, c.es_especialidad,
  me.nombre as metodo_equipo, mo.nombre as molino
from lab.pruebas p
left join lab.cafes c on c.id = p.cafe_id
left join lab.equipo me on me.id = p.metodo_equipo_id
left join lab.equipo mo on mo.id = p.molino_id;

create view lab.v_candidatos with (security_invoker = true) as
with cfg as (
  select
    max(valor) filter (where clave = 'tope_costo_bebida_mxn') as tope,
    coalesce(max(valor) filter (where clave = 'calificacion_minima'), 8) as cal_min,
    coalesce(max(valor) filter (where clave = 'consistencia_max_desv'), 0.5) as desv_max
  from lab.config
),
por_metodo as (
  select cafe_id, metodo, count(calificacion) as n, stddev_samp(calificacion) as desv
  from lab.pruebas where cafe_id is not null group by cafe_id, metodo
),
agg as (
  select
    v.cafe_id,
    count(*) as pruebas,
    max(v.calificacion) filter (where v.familia = 'espresso') as mejor_espresso,
    max(v.calificacion) filter (where v.familia = 'filtrado') as mejor_filtrado,
    round(avg(v.costo_cafe_bebida_mxn), 2) as costo_promedio_bebida_mxn
  from lab.v_pruebas v where v.cafe_id is not null group by v.cafe_id
),
cons as (
  select cafe_id,
    case when bool_or(n >= 3) then bool_or(n >= 3 and desv <= (select desv_max from cfg)) end as consistente
  from por_metodo group by cafe_id
)
select
  c.id as cafe_id, c.nombre, c.tostador, c.precio_mxn, c.peso_g, c.recomprable,
  a.pruebas, a.mejor_espresso, a.mejor_filtrado, a.costo_promedio_bebida_mxn,
  coalesce(greatest(a.mejor_espresso, a.mejor_filtrado), 0) >= cfg.cal_min as cumple_calificacion,
  coalesce(a.mejor_espresso >= cfg.cal_min and a.mejor_filtrado >= cfg.cal_min, false) as cumple_ambos_metodos,
  case when cfg.tope is null then null else a.costo_promedio_bebida_mxn <= cfg.tope end as cumple_costo,
  cs.consistente,
  case
    when coalesce(greatest(a.mejor_espresso, a.mejor_filtrado), 0) < cfg.cal_min then 'no: calificación'
    when c.recomprable is false then 'no: no se puede recomprar'
    when not coalesce(a.mejor_espresso >= cfg.cal_min and a.mejor_filtrado >= cfg.cal_min, false) then 'parcial: falta probar o mejorar en el otro método'
    when cfg.tope is not null and a.costo_promedio_bebida_mxn > cfg.tope then 'no: costo'
    when c.recomprable is null or cfg.tope is null or cs.consistente is null then 'candidato (con datos pendientes)'
    when cs.consistente is false then 'parcial: inconsistente'
    else 'candidato'
  end as estado
from lab.cafes c
join agg a on a.cafe_id = c.id
left join cons cs on cs.cafe_id = c.id
cross join cfg;

create function public.lab_publico()
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id', v.id, 'fecha', v.fecha, 'titulo', coalesce(v.titulo_publico, v.cafe_nombre),
    'metodo', v.metodo, 'familia', v.familia, 'metodo_equipo', v.metodo_equipo, 'molino', v.molino,
    'molienda', v.molienda, 'dosis_g', v.dosis_g, 'agua_g', v.agua_g, 'rendimiento_g', v.rendimiento_g,
    'ratio', v.ratio, 'temp_c', v.temp_c, 'tiempo_total_s', v.tiempo_total_s,
    'preinfusion_agua_s', v.preinfusion_agua_s, 'preinfusion_total_s', v.preinfusion_total_s,
    'extraccion_s', v.extraccion_s, 'presion_bar', v.presion_bar, 'vertidos', v.vertidos,
    'dias_desde_tueste', v.dias_desde_tueste,
    'cafe', jsonb_build_object('nombre', v.cafe_nombre, 'tostador', v.tostador, 'origen', v.origen,
                               'proceso', v.proceso, 'variedad', v.variedad),
    'evaluacion', jsonb_build_object('acidez', v.int_acidez, 'dulzor', v.int_dulzor, 'cuerpo', v.int_cuerpo,
                                     'amargor', v.int_amargor, 'final', v.int_final,
                                     'descriptores', v.descriptores, 'calificacion', v.calificacion),
    'notas', v.notas
  ) order by v.fecha desc), '[]'::jsonb)
  from lab.v_pruebas v
  where v.publica;
$$;
revoke all on function public.lab_publico() from public;
grant execute on function public.lab_publico() to anon, authenticated;

commit;
