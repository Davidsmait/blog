-- Laboratorio de café · issues 01, 02, 05, 06
create schema if not exists lab;
revoke all on schema lab from anon, authenticated;

create table lab.equipo (
  id uuid primary key default gen_random_uuid(),
  tipo text not null check (tipo in ('maquina_espresso','molino','metodo_filtrado','bascula','tetera','otro')),
  nombre text not null unique,
  detalle text,
  activo boolean not null default true,
  created_at timestamptz not null default now()
);

create table lab.cafes (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  tostador text,
  origen text,
  region text,
  finca text,
  productor text,
  proceso text,
  variedad text,
  altura_msnm int check (altura_msnm is null or altura_msnm between 0 and 4000),
  nivel_tueste text,
  notas_tostador text,
  fecha_tueste date,
  fecha_apertura date,
  peso_g numeric check (peso_g is null or peso_g > 0),
  precio_mxn numeric check (precio_mxn is null or precio_mxn >= 0),
  tienda text,
  es_especialidad boolean not null default true,
  recomprable boolean,
  notas text,
  created_at timestamptz not null default now()
);

create table lab.pruebas (
  id uuid primary key default gen_random_uuid(),
  fecha timestamptz not null default now(),
  cafe_id uuid references lab.cafes(id),
  metodo text not null check (metodo in ('espresso','chemex','prensa_francesa','v60','aeropress','otro')),
  metodo_equipo_id uuid references lab.equipo(id),
  molino_id uuid references lab.equipo(id),
  molienda numeric,
  dosis_g numeric not null check (dosis_g > 0),
  agua_g numeric check (agua_g is null or agua_g > 0),
  rendimiento_g numeric check (rendimiento_g is null or rendimiento_g > 0),
  temp_c numeric check (temp_c is null or temp_c between 60 and 100),
  tiempo_total_s int check (tiempo_total_s is null or tiempo_total_s > 0),
  -- espresso
  preinfusion_agua_s numeric check (preinfusion_agua_s is null or preinfusion_agua_s >= 0),
  preinfusion_total_s numeric check (preinfusion_total_s is null or preinfusion_total_s >= 0),
  presion_bar numeric check (presion_bar is null or presion_bar between 0 and 20),
  -- filtrado: [{"t_s":0,"g":60,"tipo":"bloom"}, ...]
  vertidos jsonb not null default '[]'::jsonb check (jsonb_typeof(vertidos) = 'array'),
  agua_receta text,
  tds numeric,
  ey numeric,
  -- evaluación capa 1 (descriptiva 1-5)
  int_acidez smallint check (int_acidez between 1 and 5),
  int_dulzor smallint check (int_dulzor between 1 and 5),
  int_cuerpo smallint check (int_cuerpo between 1 and 5),
  int_amargor smallint check (int_amargor between 1 and 5),
  int_final smallint check (int_final between 1 and 5),
  descriptores text[] not null default '{}',
  -- evaluación capa 2 (afectiva)
  calificacion numeric(3,1) check (calificacion between 6 and 10),
  veredicto text check (veredicto in ('repetir','ajustar','descartar')),
  notas text,
  cambio_siguiente text,
  prueba_padre_id uuid references lab.pruebas(id),
  publica boolean not null default false,
  titulo_publico text,
  created_at timestamptz not null default now(),
  constraint preinfusion_coherente check (preinfusion_total_s is null or preinfusion_agua_s is null or preinfusion_total_s >= preinfusion_agua_s),
  constraint tiempo_coherente check (tiempo_total_s is null or preinfusion_total_s is null or tiempo_total_s >= preinfusion_total_s)
);
create index on lab.pruebas (cafe_id);
create index on lab.pruebas (prueba_padre_id);
create index on lab.pruebas (metodo_equipo_id);
create index on lab.pruebas (molino_id);

create table lab.config (
  clave text primary key,
  valor numeric,
  nota text
);
insert into lab.config (clave, valor, nota) values
  ('tope_costo_bebida_mxn', null, 'Se define con los precios de la barrita'),
  ('calificacion_minima', 8, 'Escala afectiva 6-10'),
  ('consistencia_max_desv', 0.5, 'Desviación máxima de calificación entre ≥3 pruebas del mismo método');

alter table lab.equipo enable row level security;
alter table lab.cafes enable row level security;
alter table lab.pruebas enable row level security;
alter table lab.config enable row level security;

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

create or replace function public.lab_publico()
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

insert into lab.equipo (tipo, nombre, detalle, activo) values
  ('maquina_espresso', 'Gemilai Owl G3006', '15 bar, PID de temperatura, manómetro. Su preinfusión de fábrica (<1 s) no se usa: David preinfunde a mano (2 s de agua, pausa, bomba en el s 9).', true),
  ('molino', 'MOKKOM 64mm #1', 'Fresas planas 64 mm, 100 ajustes, temporizador. Molino principal.', true),
  ('molino', 'MOKKOM 64mm #2', 'Mismo modelo, pendiente de reparación.', false),
  ('metodo_filtrado', 'Chemex', 'Pour-over, método favorito de David.', true),
  ('metodo_filtrado', 'Prensa francesa', 'Inmersión.', true),
  ('bascula', 'Diyife con temporizador', 'Precisión 0.1 g.', true),
  ('tetera', 'Tetera con termómetro', 'Temperatura del agua visible.', true);
