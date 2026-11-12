# 07 · Página /cafe/laboratorio con fichas en build

**Tipo:** AFK
**Estado:** HECHO sin commit 9-nov: src/util/laboratorio.ts, src/pages/cafe/laboratorio.astro, src/env.d.ts. astro check sin errores nuevos; build en Linux con fixture renderizó la ficha.
**Bloqueado por:** 06

## Qué entrega esta rebanada
`src/util/laboratorio.ts` (`getPruebasPublicas()` tipado, devuelve [] sin env vars o con error) y `src/pages/cafe/laboratorio.astro` con fichas al estilo de /cafe y estado vacío.

## Capas que toca
util de datos · página Astro · lint/check.

## Cómo se demuestra que está terminada
`astro check` sin errores; sin env vars muestra estado vacío; con env vars muestra las fichas.

## Fuera de alcance de esta rebanada
Versión en inglés, filtros interactivos.

## Si el desglose resulta estar mal
Sigue el protocolo de re-desglose: detente, comenta aquí el hallazgo, NO reestructures silenciosamente. (Ver PRD: docs/prd/laboratorio-cafe.md.)
