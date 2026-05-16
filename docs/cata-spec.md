# Cata — Especificación técnica y de producto

> Documento vivo. Versión 0.1.
> Última actualización: 2026-05-15.
> Autor: David San Luis Aguirre.

---

## 1. Visión y alcance

### 1.1 Qué es Cata

Cata es una tutora conversacional de IA, integrada como capa nativa del roadmap de café de especialidad publicado en [davidsanluisaguirre.com](https://davidsanluisaguirre.com). Su trabajo es explicar conceptos técnicos del mundo del café —presiones, TDS, dureza del agua, tiempos de extracción, química básica de la torrefacción— de forma accesible y empática, ayudando a quien aprende a sentirse capaz en vez de abrumado.

No es un chatbot genérico. No es un wrapper de Claude con un disfraz. Es una capa específica que conoce profundamente el contenido del roadmap, razona sobre él, y responde con citas verificables al material publicado.

### 1.2 El alma de Cata

La única cosa que Cata hace mejor que cualquier otra herramienta del mercado: **traducir datos técnicos densos en explicaciones que cualquier persona puede entender, sin perder rigor y sin hacer sentir al lector que llega tarde a la conversación**.

Este principio define todas las decisiones futuras del producto:

- Si un patrón hace que la respuesta sea más técnica de lo necesario, se rechaza.
- Si un feature exige al usuario conocimiento previo antes de poder preguntar, se rediseña.
- Si una respuesta es técnicamente correcta pero fría o condescendiente, falla el criterio.
- Si un diseño visual prioriza impresionar sobre clarificar, se ajusta.

### 1.3 Para quién

**Usuario primario — Home barista intermedio.**
Ya tiene equipo (máquina semi-automática o método manual decente), conoce vocabulario básico como dosis, ratio y tiempo, sabe que el café se muele al momento. Llega a Cata buscando entender el *porqué* de las cosas, no aprender qué son. Se ubica en fases 2 a 5 del roadmap. Ejemplo: el propio David.

**Usuario secundario — Principiante curioso.**
Acaba de comprar su primera cafetera (prensa francesa, moka, V60), no entiende qué es TDS ni por qué importa el agua, está en fase 1. Cata debe ser amable con él sin ralentizar al intermedio. Esto se resuelve con tono adaptativo y el toggle "más simple", no con dos productos paralelos.

**Usuario no priorizado — Profesional o head barista.**
Q-graders, baristas de competencia y profesionales con SCA Intermediate o avanzado no son público objetivo. Si llegan, bienvenidos, pero no diseñamos para ellos. Esto evita la trampa de hacer una herramienta técnicamente sofisticada que excluye al usuario real.

### 1.4 Criterios de éxito

Evaluación a los tres meses post-lanzamiento del MVP.

**Criterios personales (los que de verdad cuentan)**:

- David entiende profundamente el stack: RAG, embeddings, búsqueda vectorial, prompt engineering, Agent SDK con tools custom. Puede explicarlo a otra persona y aplicarlo en otro contexto sin volver a la documentación.
- David usa Cata semanalmente como apoyo real para preparar mejor café en casa y para revisar la consistencia de sus propias lecciones.

**Criterios aspiracionales (sujetos a tener audiencia)**:

- Cuando se construya distribución: al menos 10 personas usando Cata cada semana, dejando feedback cualitativo útil.
- El proyecto se mantiene accesible, no se rompe, y los costos de IA se mantienen dentro del crédito de Claude Max sin requerir intervención manual.

**Lo que explícitamente NO es criterio de éxito**:

- Número de descargas en tiendas, MRR, usuarios totales, viralidad.
- Comparativas con BeanBook, BeanConqueror u otros competidores.
- Métricas tradicionales de retención (DAU/MAU, churn) — todavía no tiene sentido optimizar para ellas.
- Reconocimiento público, menciones en redes, mediciones de marca.

### 1.5 Alcance del MVP

**Dentro del MVP**:

- Patrón de **quiz adaptativo** con generación de preguntas por IA, basadas en el progreso de lectura del usuario y en el contenido específico de las lecciones.
- Pipeline de **RAG** completo sobre el contenido bilingüe del roadmap (`src/content/cafe/*` y `src/content/cafe-en/*`).
- **Autenticación** con Supabase Auth (email + Google) — requerida desde el día 1 porque el quiz adaptativo necesita persistencia.
- **Tracking de progreso** por usuario: qué lecciones se leyeron, cuándo, qué quizzes se hicieron, qué preguntas se fallaron, qué temas requieren refuerzo.
- **Explicaciones de respuestas incorrectas** generadas por IA, citando la lección y la sección específica de origen.
- **Soporte bilingüe** español e inglés, sincronizado con la lógica existente del blog.
- **Logging de tokens** por usuario y por endpoint para observabilidad de costos.

**Fuera del MVP (explícitamente diferido)**:

- Patrones 1, 2 y 3 (selección de texto + menú flotante, cards contextuales embebidas, tooltips inteligentes). Se construyen *después* de que el quiz adaptativo esté funcionando y haya sido validado en uso personal.
- App nativa en App Store o Google Play. Primero PWA, después empaquetado con Capacitor si y solo si hay demanda real.
- Cualquier integración con hardware (básculas Bluetooth, máquinas smart, sensores).
- Funciones sociales: comentarios, perfiles públicos, compartir resultados, ranking.
- Monetización, freemium, paywalls, suscripciones.
- Analytics más allá de logs básicos. No Mixpanel, no Amplitude, no Heap.
- Notificaciones push, emails de re-engagement, drip campaigns.
- Modo offline.
- Voz (TTS, STT).

**Definición operacional de "MVP listo"**:

1. David puede iniciar sesión, leer una lección de la fase 1, abrir el quiz adaptativo, y recibir 5 preguntas generadas por IA que estén basadas en *su* progreso de lectura específico.
2. Al responder, recibe retroalimentación inmediata. Las respuestas incorrectas vienen acompañadas de una explicación breve que cita la lección y la sección de origen.
3. Las preguntas no se repiten entre sesiones diferentes para el mismo usuario, hasta agotar el pool razonable de la lección.
4. Todo funciona idénticamente en español y en inglés.
5. El consumo de tokens está logueado, visible para David, y se mantiene dentro del crédito mensual del Agent SDK de Claude Max bajo uso personal y de los primeros usuarios beta.

### 1.6 Lo que Cata explícitamente NO hace

Estas son restricciones del producto que protegen su alma:

- **No reemplaza el contenido del roadmap.** Lo amplifica. Si una explicación de Cata es mejor que la del blog, eso indica que la lección debe mejorarse, no que la lección sobra.
- **No inventa datos numéricos.** Si no tiene el rango en su corpus, dice "no lo tengo en el roadmap" en vez de improvisar.
- **No cita fuentes externas que no estén en el material publicado** del blog. Cero alucinación de papers, libros o frases atribuidas.
- **No recomienda marcas o productos específicos.** Da criterios para elegir, no marcas para comprar. Esto evita conflictos de interés y simplifica mantenimiento.
- **No toma postura en debates abiertos** del mundo del café (origen vs tueste, leche vegetal vs animal, máquinas de levas vs eléctricas). Presenta las perspectivas existentes.
- **No responde preguntas médicas** (cafeína, embarazo, condiciones cardíacas). Sugiere consultar a un profesional de salud.
- **No conversa sobre temas ajenos al café.** No es Siri ni ChatGPT. Si le preguntan por el clima, declina amablemente y reorienta.

---

*Próximas secciones por escribir: 2. Modelo de datos · 3. Pipeline de RAG · 4. Contrato de API · 5. Arquitectura de los 4 patrones UI · 6. Identidad visual de Cata · 7. Estados de UI · 8. Estrategia de costos y observabilidad · 9. Estructura de carpetas y stack final · 10. Autenticación y privacidad.*
