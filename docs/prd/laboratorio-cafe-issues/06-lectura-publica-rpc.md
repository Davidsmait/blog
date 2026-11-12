# 06 · Exponer solo las pruebas públicas vía RPC

**Tipo:** AFK
**Estado:** HECHO 9-nov (public.lab_publico verificado con anon key: devuelve solo públicas; schema lab no expuesto en la API).
**Bloqueado por:** 01, 02

## Qué entrega esta rebanada
`public.lab_publico()` (security definer, solo lectura, search_path fijo) devuelve JSON de pruebas `publica = true` con bolsa y equipo. Grant de execute a anon; las tablas de `lab` siguen ilegibles para anon.

## Capas que toca
función SQL · grants · verificación SQL y llamada REST con anon key.

## Cómo se demuestra que está terminada
`POST /rest/v1/rpc/lab_publico` con anon key devuelve solo las públicas; `get_advisors` sin alertas nuevas de seguridad.

## Fuera de alcance de esta rebanada
Paginación o filtros.

## Cómo implementar
Implementar con la skill `tdd`: RED→GREEN con consultas SQL de verificación (asserts en `execute_sql`) contra Development antes de aplicar en Production.

## Si el desglose resulta estar mal
Sigue el protocolo de re-desglose: detente, comenta aquí el hallazgo, NO reestructures silenciosamente. (Ver PRD: docs/prd/laboratorio-cafe.md.)
