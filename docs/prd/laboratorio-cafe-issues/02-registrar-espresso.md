# 02 · Registrar un espresso con preinfusión manual

**Tipo:** AFK
**Estado:** HECHO 9-nov (incluido en la migración de 01; verificado: 18→36 g, preinfusión 2/9 s, 30 s → ratio 1:2, extracción 21 s).
**Bloqueado por:** 01

## Qué entrega esta rebanada
Columnas de espresso (`preinfusion_agua_s`, `preinfusion_total_s`, `presion_bar`, `temp_c` del PID, `tiempo_total_s`) con checks, y `v_pruebas` muestra el tiempo de extracción real (total − preinfusión).

## Capas que toca
schema (columnas + checks) · vista · verificación SQL.

## Cómo se demuestra que está terminada
Un espresso 18 g → 36 g, preinfusión 2 s agua / 9 s total, 30 s totales, aparece con ratio 1:2 y extracción 21 s.

## Fuera de alcance de esta rebanada
Perfiles de presión por segundo.

## Cómo implementar
Implementar con la skill `tdd`: RED→GREEN con consultas SQL de verificación (asserts en `execute_sql`) contra Development antes de aplicar en Production.

## Si el desglose resulta estar mal
Sigue el protocolo de re-desglose: detente, comenta aquí el hallazgo, NO reestructures silenciosamente. (Ver PRD: docs/prd/laboratorio-cafe.md.)
