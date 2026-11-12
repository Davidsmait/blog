# Laboratorio de café — registro conversacional de pruebas

## Problema
David prepara café con métodos muy distintos (espresso en Gemilai Owl G3006, Chemex, prensa francesa) y observa comportamientos muy diferentes entre preparaciones, incluso entre espressos del mismo grano. Hoy no lleva registro: olvida tiempos, vertidos, molienda y temperatura, así que no puede reproducir una buena taza ni entender por qué una salió mal.

Además, está por arrancar pruebas de una barrita de café (sábados de noviembre) y necesitará elegir qué granos comprar (bolsas de 250 g a 1 kg, en línea o en tiendas) mientras no tenga tostadora. Sin datos de costo por bebida, calificación y consistencia, esa elección se hace a ojo.

Finalmente, quiere aprender a evaluar una taza con un estándar profesional (SCA), pero aún no sabe detectar los atributos. Necesita un método que le enseñe mientras registra.

## Solución propuesta
Un laboratorio de café cuya interfaz es Claude: David dicta la prueba (desde el celular o la compu) y Claude la estructura, calcula derivados y la guarda en Supabase (schema aislado `lab` en La Commune Production). Una skill `laboratorio-cafe` hace que cualquier sesión registre igual, guíe la cata en dos capas y sepa publicar.

Lo mejor sale al blog por dos vías: una página `/cafe/laboratorio` generada en build con las pruebas marcadas como públicas, y posts en `/cafe` que Claude redacta y David aprueba para las recetas estrella.

## Decisiones tomadas
Fuente: `docs/decisiones/2026-11-09-laboratorio-cafe.md`.
- Privado por defecto, lo mejor se publica.
- Captura conversacional, sin formularios.
- Supabase Production (`vzreodbrwksaoqmsnnqk`), schema `lab`, nunca toca `public` del POS.
- Tablas: `lab.equipo`, `lab.cafes` (bolsa), `lab.pruebas` (con vertidos en JSONB y `prueba_padre_id`).
- Espresso: `preinfusion_agua_s` + `preinfusion_total_s`, presión, temperatura PID.
- Refractómetro no se compra por ahora; `tds`/`ey` opcionales.
- Evaluación en 2 capas: descriptiva (intensidad 1-5) + afectiva (6-10 estilo SCA + veredicto).
- Criterios de candidato a barra: calificación ≥ 8, costo por bebida ≤ tope, se puede volver a comprar, funciona en espresso y filtrado.
- Barrita (ventas/clientes) fuera del laboratorio; el laboratorio solo selecciona granos.
- Skill `laboratorio-cafe` para continuidad.

Decisiones técnicas tomadas al escribir el PRD (default razonable, reversibles):
- **Cálculos en la base, no en el cliente:** ratio, días desde tueste y costo por bebida viven en la vista `lab.v_pruebas`; cualquier sesión o la web obtienen el mismo número.
- **Lectura pública vía RPC, no exponiendo el schema:** función `public.lab_publico()` (`security definer`, solo lectura, devuelve únicamente pruebas `publica = true` con su bolsa y equipo). Evita configurar el Data API para `lab` y deja una sola puerta estrecha. El blog la llama con la anon key en build (fetch REST, sin dependencia de supabase-js).
- **Migración primero en Development**, se valida, y luego en Production.
- **Tope de costo como dato**, no código: tabla `lab.config` (clave/valor) con `tope_costo_bebida_mxn` nullable hasta que David lo fije.
- **Fotos de bolsa:** v1 no se almacenan; solo los datos extraídos.

## Módulos
1. **Esquema `lab`** (migración SQL) — tablas, checks, RLS cerrada (sin políticas para anon/authenticated: escribe solo el rol de servicio vía MCP).
2. **Vista `lab.v_pruebas`** [deep module] — encapsula todos los derivados (ratio, días desde tueste, costo de café por bebida, calificación). Interfaz: un SELECT.
3. **Vista `lab.v_candidatos`** [deep module] — encapsula los criterios de barra por bolsa (mejor calificación espresso y filtro, costo, recomprable, consistencia). Interfaz: un SELECT; cambiar criterios no toca clientes.
4. **RPC `public.lab_publico()`** [deep module] — única superficie pública; devuelve JSON listo para render.
5. **Skill `laboratorio-cafe`** — protocolo de registro, cata guiada, catálogo de equipo, SQL de inserción, flujo de publicar.
6. **Blog: `src/util/laboratorio.ts`** — `getPruebasPublicas()` tipado; si faltan env vars o falla la red, devuelve `[]` y el build no se rompe.
7. **Blog: `src/pages/cafe/laboratorio.astro`** — fichas de pruebas públicas con el estilo de `/cafe`.
8. **Rebuild** — Netlify build hook (env `SUPABASE_URL`, `SUPABASE_ANON_KEY` en Netlify).

## Fuera de alcance
- Formularios o app de captura propios.
- Almacenar fotos de bolsas (Storage).
- Registro de ventas/clientes de la barrita.
- Refractómetro y análisis de extracción con TDS.
- Versión en inglés de `/cafe/laboratorio`.
- Rebuild automático por trigger de base de datos (v1: build hook manual o desde Claude).

## Preguntas abiertas
- Tope de costo de café por bebida — depende de: precios de la barrita (14-nov).
- Criterios extra (leche, consistencia, ventana de molienda, frescura, cata a ciegas) — depende de: David. `v_candidatos` ya expone consistencia; los demás se agregan si los adopta.
- Fotos de bolsas — depende de: David (v2).

## Criterios de aceptación
- Existe el schema `lab` en Production con `equipo`, `cafes`, `pruebas`, `config`, sin cambios en `public` salvo la función `lab_publico()`.
- `lab.equipo` contiene el equipo actual de David.
- Una prueba dictada en lenguaje natural queda guardada con ratio, días desde tueste y costo por bebida calculados por la vista.
- Un espresso guarda preinfusión (agua y total), presión y temperatura.
- `lab.v_candidatos` lista bolsas que cumplen los criterios; con tope nulo, ese criterio se muestra como "sin definir", no como falso.
- `public.lab_publico()` llamado con anon key solo devuelve pruebas `publica = true`; las tablas de `lab` no son legibles con anon key.
- La skill `laboratorio-cafe` existe y guía la cata en 2 capas.
- `/cafe/laboratorio` compila sin env vars (estado vacío) y con ellas muestra las fichas públicas.
- Nada se commitea sin aprobación de David.
