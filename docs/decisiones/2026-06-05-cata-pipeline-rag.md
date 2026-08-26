# Decisiones — Cata: pipeline RAG mínimo (vehículo de prueba de skills) · 2026-06-05

> Generado por grill-me. Entrada para write-a-prd (DAV-52): leer esto y NO re-preguntar lo decidido.
> Contexto previo: spec v0.1 en branch `cata` de davidblog (`docs/cata-spec.md`, 519 líneas, 15-may-2026).
> Nota: mover este archivo al repo `cata` cuando exista (o commitearlo al branch `cata`).

## Decisiones tomadas

- **Vehículo de prueba de las 5 skills (DAV-51→56)**: cambia de "export PDF/CSV de Reportes POS" a **pipeline RAG mínimo de Cata + mini-UI de búsqueda** — tamaño correcto (~1-2 semanas de noches), convierte el sandbox cata-vector-learning en producto, máximo ROI para Plan C.
- **Alcance de la rebanada**: trocear lecciones del roadmap (ES/EN) → embeddings → pgvector+HNSW → endpoint de búsqueda que responde fragmentos con cita (lección + sección) → página simple de búsqueda. SIN auth, SIN quiz, SIN tracking (eso es el MVP posterior, ver spec).
- **Repo**: nuevo **`cata` en Davidsmait**, monorepo: `api/` (NestJS) + `web/` (Next.js mini-UI) — un solo repo, dos apps.
- **Backend separado del frontend**: el blog está en Astro (estático), no puede hospedar la API. Cata es una API standalone que cualquier frontend consume vía fetch (mini-UI hoy, blog Astro después). NestJS además es práctica defendible para vacantes Plan A (stack Grace) construida 100% fuera de C&M.
- **Base de datos**: Postgres local en Docker con pgvector — $0, sin pausas de Supabase free. Migración a Supabase se decide cuando llegue el MVP con auth.
- **Embeddings**: modelo open-source local/edge (gte-small o similar) — $0, sin API keys, defendible en entrevista. Modelo exacto se elige en el PRD/implementación.
- **Demo público en línea**: diferido. Para la prueba de skills basta demo local.
- **Linear**: proyecto nuevo **"Cata"** (regla: un proyecto por producto). Las rebanadas de prd-to-issues (DAV-53) van ahí, no a Plan personal ni a La Commune POS.
- **DAV-55 (improve-codebase-architecture)**: se corre AL FINAL sobre el código de Cata recién construido — meta-prueba: ¿la cadena produce código sin fricción o la skill encuentra deuda?
- **DAV-51 (grill-me)**: cumplida con esta sesión (2026-06-05).

## Preguntas abiertas

- Modelo de embeddings exacto y estrategia de chunking — se decide en: write-a-prd (DAV-52) / implementación TDD.
- Cuándo migrar de Postgres local a Supabase — depende de: llegada del MVP con auth (ver spec §MVP).
