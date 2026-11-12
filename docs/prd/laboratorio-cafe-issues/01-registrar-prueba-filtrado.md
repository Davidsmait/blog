# 01 · Registrar una prueba de filtrado y ver sus derivados

**Tipo:** AFK
**Estado:** HECHO 9-nov (Production; Development sin conexión → dry-run transaccional en Production con asserts + rollback, luego migración real). PENDIENTE: calificacion numeric(3,1) → numeric(4,2) (cuartos de punto SCA).
**Bloqueado por:** nada

## Qué entrega esta rebanada
Schema `lab` con `equipo`, `cafes`, `pruebas`, `config` y la vista `lab.v_pruebas`. Una prueba de Chemex insertada devuelve ratio, días desde tueste y costo de café por bebida calculados.

## Capas que toca
schema (tablas, checks, RLS cerrada) · vista de derivados · seed del equipo actual · verificación SQL.

## Cómo se demuestra que está terminada
Insertar una bolsa y una prueba de Chemex en Development; `select * from lab.v_pruebas` muestra ratio y costo correctos. Repetir en Production. `public` intacto.

## Fuera de alcance de esta rebanada
Campos específicos de espresso, candidatos, lectura pública.

## Cómo implementar
Implementar con la skill `tdd`: RED→GREEN con consultas SQL de verificación (asserts en `execute_sql`) contra Development antes de aplicar en Production.

## Si el desglose resulta estar mal
Sigue el protocolo de re-desglose: detente, comenta aquí el hallazgo, NO reestructures silenciosamente. (Ver PRD: docs/prd/laboratorio-cafe.md.)
