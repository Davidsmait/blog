# 05 · Ver qué bolsas califican como candidatas a barra

**Tipo:** AFK
**Estado:** HECHO 9-nov (v_candidatos + lab.config; verificado estado con tope nulo y con tope).
**Bloqueado por:** 01, 02

## Qué entrega esta rebanada
Vista `lab.v_candidatos` por bolsa: mejor calificación en espresso y en filtro, costo por bebida, recomprable, consistencia (desviación entre pruebas repetidas), cumplimiento de cada criterio y veredicto. Tope leído de `lab.config`; si es nulo, se muestra "sin definir".

## Capas que toca
vista · config · verificación SQL.

## Cómo se demuestra que está terminada
Con datos de prueba: una bolsa que cumple todo aparece como candidata; con tope nulo el criterio de costo dice "sin definir".

## Fuera de alcance de esta rebanada
Criterios extra (leche, ventana de molienda, frescura, cata a ciegas) hasta que David los adopte.

## Cómo implementar
Implementar con la skill `tdd`: RED→GREEN con consultas SQL de verificación (asserts en `execute_sql`) contra Development antes de aplicar en Production.

## Si el desglose resulta estar mal
Sigue el protocolo de re-desglose: detente, comenta aquí el hallazgo, NO reestructures silenciosamente. (Ver PRD: docs/prd/laboratorio-cafe.md.)
