# Decisiones — Laboratorio de café (registro de pruebas) · 2026-11-09

## Decisiones tomadas
- Audiencia: privado por defecto, lo mejor se publica — cuaderno honesto (incluye fallos) + contenido para el blog.
- Captura: conversacional — David dicta a Claude (celular o compu, con o sin coach) y Claude estructura y guarda. Sin formularios. Mezcla: números en caliente, notas de sabor después.
- Almacén: Supabase "La Commune Production" (vzreodbrwksaoqmsnnqk), schema aislado `lab` — accesible desde el celular aunque la compu esté apagada; nunca toca tablas del POS (public). Migraciones con cuidado: es la base productiva.
- Catálogo de equipo (tabla `lab.equipo`): Gemilai Owl G3006 (PID + manómetro), MOKKOM 64mm flat (100 ajustes; el #2 en reparación), Chemex, prensa francesa, báscula Diyife con timer, tetera con termómetro. David avisa si cambia equipo.
- Bolsas (tabla `lab.cafes`): una fila por bolsa — tostador, origen, proceso, variedad, altura, fecha de tueste, peso (250 g / 500 g / 1 kg), precio, tienda/proveedor, `es_especialidad`. Captura por foto de la bolsa; si falta un dato que suele venir impreso, Claude pregunta. Cafés comerciales con campos nulos permitidos.
- Pruebas (tabla `lab.pruebas`): método, equipo, bolsa, dosis, rendimiento/agua, ratio (calculado), molienda (ajuste MOKKOM), temperatura, tiempo total, días desde tueste (calculado), costo de café por bebida (calculado), vertidos en JSONB (tiempo, gramos, tipo: bloom/espiral/centro), `prueba_padre_id` para encadenar iteraciones de dial-in.
- Espresso: campos `preinfusion_agua_s` (≈2 s), `preinfusion_total_s` (bomba en el s 9, incluidos los 2 s), presión en manómetro, temperatura PID. La "preinfusión" de fábrica de la Owl (pulso <1 s) no se usa.
- Refractómetro: no comprar por ahora (compite con la meta MacBook; primero paladar). Campos `tds` y `ey` opcionales en el esquema.
- Evaluación en 2 capas, basada en SCA y enseñada en cada prueba: (1) descriptiva — intensidad 1-5 de acidez, dulzor, cuerpo, amargor, final + descriptores; (2) afectiva — calificación 6-10 estilo SCA + veredicto (repetir / ajustar / descartar). Claude guía con preguntas en orden (aroma seco, caliente, al enfriar). Nota: el formulario SCA clásico es de catación; aquí se adapta para preparaciones. Base: roadmap-4-2-protocolo-catacion-sca.
- Publicar: ambas vías — (a) página /cafe/laboratorio que lee en build las pruebas `publica = true` (lectura acotada; rebuild de Netlify al publicar); (b) post .md en /cafe que Claude redacta y David aprueba para recetas estrella, con la historia de iteraciones.
- Barrita: sus ventas y clientes van aparte; el laboratorio funciona como puente para seleccionar cafés de compra (250 g-1 kg en línea o tiendas) mientras no haya tostadora.
- Criterios de "candidato a barra": calificación de 8 o más · costo por bebida bajo un tope · se puede volver a comprar · funciona en espresso y en filtrado. Propuestos por Claude (por confirmar): sabe bien con leche (la mayoría de las bebidas en MX llevan leche) · consistencia (3 preparaciones con la misma receta dentro de ±0.5 de calificación) · ventana de molienda tolerante (perdona errores en servicio) · cuántos días desde el tueste sigue bien · preferencia de clientes en cata a ciegas en la barrita.
- Continuidad: skill `laboratorio-cafe` (esquema, protocolo de cata guiada, cálculo de costos, flujo de publicar). Disparadores: "registra una prueba", "abrí bolsa nueva", "esta merece post".

## Preguntas abiertas
- Tope de costo de café por bebida — depende de: precios de la barrita (prueba 14-nov).
- ¿Se adoptan los criterios extra propuestos (leche, consistencia, ventana de molienda, frescura, cata a ciegas)? — depende de: David.
- Lectura pública desde el blog: exponer schema `lab` en la Data API con RLS de solo lectura vs. vista acotada / service key solo en el build de Netlify — decisión técnica para write-a-prd.
- Fotos de bolsas: ¿guardar la imagen (Storage) o solo los datos extraídos? — depende de: David.

## Cambio 12-nov-2026 (petición de David)
- Historial público: `/cafe/laboratorio` muestra TODAS las pruebas (historial) y, arriba, las destacadas. La columna `publica` ahora significa "destacada"; `public.lab_publico()` devuelve todas con el campo `destacada`.
- En vivo, sin deploy: la página pide el historial desde el navegador a la RPC con la publishable key (pública por diseño). Netlify solo inyecta URL y key en build.
