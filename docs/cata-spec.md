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

## 2. Modelo de datos

### 2.1 Filosofía

El modelo del MVP se diseña con tres principios:

1. **Mínimo viable, no mínimo aspiracional.** Solo se modelan las entidades que el quiz adaptativo necesita ahora. Glosario, conversaciones libres y personalización avanzada van fuera.
2. **Optimizado para el patrón de uso real.** El flujo más frecuente es: leer lección → abrir quiz → responder. Las consultas más caras (búsqueda vectorial, generación de quiz, agregaciones de "temas débiles") son las más cuidadas en índices.
3. **Row Level Security desde el día 1.** No se delega autorización a la aplicación. Cada tabla con datos de usuario tiene policies de Supabase que garantizan que solo puede leer y modificar sus propias filas. La aplicación nunca usa la `service_role` key salvo en jobs administrativos (indexación, generación de quizzes).

### 2.2 Mapa relacional

```
auth.users (manejado por Supabase Auth)
    │
    └─→ user_profiles (1:1) — extensión del usuario
            │
            ├─→ lesson_reads (1:N) — qué leyó, cuándo, cuánto tiempo
            ├─→ quiz_sessions (1:N) — cada intento de quiz
            │       │
            │       └─→ quiz_questions (1:N) — preguntas generadas por IA
            │               │
            │               └─→ quiz_answers (1:1) — respuesta del usuario
            │
            └─→ token_usage (1:N) — observabilidad de costos

lesson_chunks — corpus RAG, sin FK a usuario (público read-only)
```

### 2.3 Tablas

#### 2.3.1 `lesson_chunks` — corpus RAG

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE lesson_chunks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_slug TEXT NOT NULL,
    language TEXT NOT NULL CHECK (language IN ('es', 'en')),
    phase SMALLINT NOT NULL CHECK (phase BETWEEN 1 AND 9),
    lesson_order SMALLINT NOT NULL,
    chunk_index SMALLINT NOT NULL,
    section_heading TEXT,
    content TEXT NOT NULL,
    token_count SMALLINT NOT NULL,
    content_hash TEXT NOT NULL,
    embedding VECTOR(1024) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (lesson_slug, language, chunk_index)
);

CREATE INDEX lesson_chunks_embedding_idx
    ON lesson_chunks
    USING hnsw (embedding vector_cosine_ops);

CREATE INDEX lesson_chunks_lesson_lang_idx
    ON lesson_chunks (lesson_slug, language);

CREATE INDEX lesson_chunks_phase_lang_idx
    ON lesson_chunks (phase, language);

ALTER TABLE lesson_chunks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lesson_chunks readable by anyone"
    ON lesson_chunks FOR SELECT
    USING (true);

CREATE POLICY "lesson_chunks writable by service role only"
    ON lesson_chunks FOR ALL
    USING (auth.role() = 'service_role');
```

#### 2.3.2 `user_profiles` — extensión de auth.users

```sql
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT,
    preferred_language TEXT NOT NULL DEFAULT 'es'
        CHECK (preferred_language IN ('es', 'en')),
    experience_level TEXT NOT NULL DEFAULT 'intermediate'
        CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para crear perfil al registrarse
CREATE OR REPLACE FUNCTION create_user_profile()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profiles (id, display_name)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION create_user_profile();

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can view own profile"
    ON user_profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "users can update own profile"
    ON user_profiles FOR UPDATE
    USING (auth.uid() = id);
```

#### 2.3.3 `lesson_reads` — tracking de lectura

```sql
CREATE TABLE lesson_reads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    lesson_slug TEXT NOT NULL,
    language TEXT NOT NULL CHECK (language IN ('es', 'en')),
    first_read_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_read_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    read_count INTEGER NOT NULL DEFAULT 1,
    total_dwell_seconds INTEGER NOT NULL DEFAULT 0,
    scrolled_to_end BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (user_id, lesson_slug, language)
);

CREATE INDEX lesson_reads_user_recent_idx
    ON lesson_reads (user_id, last_read_at DESC);

ALTER TABLE lesson_reads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can view own reads"
    ON lesson_reads FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "users can insert own reads"
    ON lesson_reads FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users can update own reads"
    ON lesson_reads FOR UPDATE
    USING (auth.uid() = user_id);
```

#### 2.3.4 `quiz_sessions` — cada intento de quiz

```sql
CREATE TABLE quiz_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    lesson_slug TEXT,  -- NULL si es quiz de síntesis multi-lección
    language TEXT NOT NULL CHECK (language IN ('es', 'en')),
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    question_count SMALLINT NOT NULL DEFAULT 5,
    correct_count SMALLINT,
    generation_context JSONB,  -- snapshot de qué usó Cata para generar
    generation_input_tokens INTEGER,
    generation_output_tokens INTEGER
);

CREATE INDEX quiz_sessions_user_started_idx
    ON quiz_sessions (user_id, started_at DESC);

CREATE INDEX quiz_sessions_user_lesson_idx
    ON quiz_sessions (user_id, lesson_slug, language);

ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can view own sessions"
    ON quiz_sessions FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "users can insert own sessions"
    ON quiz_sessions FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users can update own sessions"
    ON quiz_sessions FOR UPDATE
    USING (auth.uid() = user_id);
```

#### 2.3.5 `quiz_questions` — preguntas generadas por IA

```sql
CREATE TABLE quiz_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES quiz_sessions(id) ON DELETE CASCADE,
    question_index SMALLINT NOT NULL,
    question_text TEXT NOT NULL,
    question_type TEXT NOT NULL DEFAULT 'multiple_choice'
        CHECK (question_type IN ('multiple_choice', 'scenario_mc', 'true_false')),
    options JSONB NOT NULL,  -- array: [{"text": "...", "is_correct": false}, ...]
    correct_option_index SMALLINT NOT NULL,
    explanation TEXT NOT NULL,
    source_lesson_slug TEXT NOT NULL,
    source_section TEXT,
    difficulty TEXT NOT NULL DEFAULT 'medium'
        CHECK (difficulty IN ('easy', 'medium', 'hard')),
    topic_tags TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (session_id, question_index)
);

CREATE INDEX quiz_questions_session_idx
    ON quiz_questions (session_id, question_index);

CREATE INDEX quiz_questions_source_idx
    ON quiz_questions (source_lesson_slug);

ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can view questions from own sessions"
    ON quiz_questions FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM quiz_sessions
            WHERE quiz_sessions.id = quiz_questions.session_id
              AND quiz_sessions.user_id = auth.uid()
        )
    );

CREATE POLICY "service role can insert questions"
    ON quiz_questions FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
```

#### 2.3.6 `quiz_answers` — respuestas del usuario

```sql
CREATE TABLE quiz_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id UUID NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
    selected_option_index SMALLINT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_to_answer_seconds INTEGER,
    answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (question_id, user_id)
);

CREATE INDEX quiz_answers_user_recent_idx
    ON quiz_answers (user_id, answered_at DESC);

CREATE INDEX quiz_answers_question_idx
    ON quiz_answers (question_id);

ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can view own answers"
    ON quiz_answers FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "users can insert own answers"
    ON quiz_answers FOR INSERT
    WITH CHECK (auth.uid() = user_id);
```

#### 2.3.7 `token_usage` — observabilidad de costos

```sql
CREATE TABLE token_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
    endpoint TEXT NOT NULL,         -- 'quiz_generate', 'quiz_explain', 'embedding', etc.
    model TEXT NOT NULL,            -- 'haiku-4.5', 'sonnet-4.6', 'voyage-3'
    input_tokens INTEGER NOT NULL DEFAULT 0,
    output_tokens INTEGER NOT NULL DEFAULT 0,
    cached_input_tokens INTEGER NOT NULL DEFAULT 0,
    cost_usd NUMERIC(10, 6) NOT NULL DEFAULT 0,
    request_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX token_usage_user_recent_idx
    ON token_usage (user_id, created_at DESC);

CREATE INDEX token_usage_global_idx
    ON token_usage (created_at DESC);

CREATE INDEX token_usage_endpoint_idx
    ON token_usage (endpoint, created_at DESC);

ALTER TABLE token_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can view own usage"
    ON token_usage FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "service role manages all"
    ON token_usage FOR ALL
    USING (auth.role() = 'service_role');
```

#### 2.3.8 `lesson_quiz_cache` — preguntas pre-generadas para modo invitado

Sirve a los visitantes sin login: cuando alguien entra a una lección y abre el quiz sin estar autenticado, recibe preguntas de este pool en vez de generarlas en vivo. El pool se regenera cada 30 días (o cuando la lección se edita, vía `content_hash` matching).

```sql
CREATE TABLE lesson_quiz_cache (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_slug TEXT NOT NULL,
    language TEXT NOT NULL CHECK (language IN ('es', 'en')),
    questions JSONB NOT NULL,  -- pool de 10-15 preguntas con misma forma que quiz_questions
    source_content_hash TEXT NOT NULL,  -- para invalidar cuando la lección cambia
    generated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    valid_until TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
    UNIQUE (lesson_slug, language)
);

CREATE INDEX lesson_quiz_cache_lookup_idx
    ON lesson_quiz_cache (lesson_slug, language, valid_until);

ALTER TABLE lesson_quiz_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can read quiz cache"
    ON lesson_quiz_cache FOR SELECT
    USING (true);

CREATE POLICY "service role manages quiz cache"
    ON lesson_quiz_cache FOR ALL
    USING (auth.role() = 'service_role');
```

**Notas operativas del modo invitado**:
- Las respuestas del usuario invitado no se persisten. Vive solo en el browser durante esa sesión.
- El consumo de tokens al generar el pool sí se loguea en `token_usage` con `user_id = NULL`.
- El endpoint del modo invitado está rate-limiteado por IP (definido en sección 4).
- El pool sirve a TODOS los invitados que vean esa lección — costo amortizado.

### 2.4 Decisiones explícitas y trade-offs

**Modelo de embeddings — Voyage AI voyage-3 (1024 dimensiones).**
Costo: $0.06 por millón de tokens (más barato que OpenAI text-embedding-3-small) y top-3 en benchmark MTEB a inicios de 2026. Trade-off: dependencia de Voyage. Si quisieras cambiar a OpenAI, BGE local u otro, hay que re-embeber todo el corpus. Costo de cambio: ~$0.10 total para el roadmap completo, despreciable.

**Índice vectorial — HNSW en vez de IVFFlat.**
Mejor recall/speed para corpus pequeños (<100K chunks), sin requerir entrenamiento. Para nuestro tamaño esperado (~1,000 chunks: 50 lecciones × ~10 chunks × 2 idiomas) es la elección obvia.

**Bilingüe con `language` como columna, no como tabla aparte.**
Cada lección genera chunks separados en `es` y `en`, todos en la misma tabla. Las queries filtran por `language` antes del similarity search. Beneficio: aislamiento perfecto, sin contaminación cruzada de idiomas. Costo: duplicación del corpus (irrelevante por tamaño).

**Dwell time vía heartbeat del cliente.**
El frontend envía `navigator.sendBeacon('/api/cata/heartbeat', ...)` cada 30 segundos mientras la pestaña está activa. El endpoint hace UPSERT en `lesson_reads` incrementando `total_dwell_seconds`. Trade-off: pierde precisión si la pestaña queda abierta en background. Suficiente como señal aproximada para informar la generación de quizzes.

**`quiz_questions` y `quiz_answers` en tablas separadas.**
Permite futuro: cachear preguntas para reutilizarlas entre usuarios, o regenerar respuesta sin perder la pregunta. Costo: un JOIN más en queries de historial. Despreciable para los volúmenes esperados.

**Sin tabla `weak_topics` pre-computada.**
Los temas débiles se calculan al vuelo desde `quiz_answers` cuando se va a generar un nuevo quiz:

```sql
SELECT topic, AVG(is_correct::int) AS accuracy, COUNT(*) AS attempts
FROM quiz_answers qa
JOIN quiz_questions qq ON qq.id = qa.question_id,
     unnest(qq.topic_tags) AS topic
WHERE qa.user_id = $1
GROUP BY topic
HAVING COUNT(*) >= 2 AND AVG(is_correct::int) < 0.5;
```

Trade-off: con miles de respuestas la query se vuelve cara. Para MVP es perfectamente válido. Si la latencia crece, materializar como `MATERIALIZED VIEW REFRESH CONCURRENTLY`.

**Metadata de lección denormalizada en `lesson_chunks`.**
`phase` y `lesson_order` se duplican en cada chunk. Beneficio: sin JOINs en queries de retrieval, donde la búsqueda vectorial ya es el cuello de botella. Costo: re-indexar si cambias metadata de una lección (raro).

**Hash de contenido (`content_hash`) para re-indexación incremental.**
Cuando el script de indexación corre, calcula hash por chunk. Si el hash coincide con el almacenado, no re-embebe. Ahorra dinero y tiempo en builds. Trade-off: una columna más por chunk (insignificante).

**Sin tabla `conversations` por ahora.**
El MVP no tiene chat libre. Cuando se sumen los otros patrones se agrega `conversations(id, user_id, ...)` y `conversation_messages(id, conversation_id, role, content, ...)`. Migración aceptable.

### 2.5 Estimación de tamaño

Para calibrar dimensiones del free tier de Supabase (500 MB DB):

| Tabla | Filas esperadas año 1 | Bytes/fila aprox | Total |
|-------|----------------------|------------------|-------|
| lesson_chunks | ~2,000 | ~5 KB (texto + embedding 4 KB) | 10 MB |
| user_profiles | <500 | 200 B | 100 KB |
| lesson_reads | <10,000 | 150 B | 1.5 MB |
| quiz_sessions | <5,000 | 400 B | 2 MB |
| quiz_questions | <25,000 | 1 KB | 25 MB |
| quiz_answers | <25,000 | 100 B | 2.5 MB |
| token_usage | <100,000 | 200 B | 20 MB |
| lesson_quiz_cache | ~100 (50 lecciones × 2 idiomas) | ~5 KB | 500 KB |
| **Total** | — | — | **~60 MB** |

Sobra muchísimo espacio en free tier. El cuello será probablemente el ancho de banda o las llamadas a la API antes que el storage.

### 2.6 Lo que NO se modela en MVP

- **Glosario de términos** — lo necesita el patrón de tooltips, no MVP.
- **Conversaciones libres / chat** — patrones 1, 2, 3 — no MVP.
- **Equipo del usuario** (máquina, molino, báscula) — útil para personalización futura.
- **Favoritos, bookmarks, anotaciones** — no MVP.
- **Notificaciones, suscripciones, eventos asincrónicos** — no MVP.
- **Cohortes, retención, embudos** — sin Mixpanel/Amplitude por ahora; los logs básicos en `token_usage` y agregados sobre `quiz_sessions` alcanzan.
- **Soft deletes / auditoría** — `ON DELETE CASCADE` directo. Si más adelante hay regulación que lo exija, se agrega columna `deleted_at` y se filtran las queries.

### 2.7 Bitácora de decisiones de esta sesión (2026-05-15)

| Decisión | Elección | Razón |
|----------|----------|-------|
| Dwell time | Heartbeat cada 30s | Señal valiosa para personalizar quizzes (lectura rápida → quiz de síntesis, lectura lenta → quiz de profundidad). |
| Modo invitado | Sí, quiz no-adaptativo desde pool cacheado | Reduce barrera de onboarding sin renunciar a la personalización para usuarios autenticados. Requiere tabla `lesson_quiz_cache` y rate-limit por IP. |
| Modelo Claude para generación | Mezcla Haiku 4.5 + Sonnet 4.6 | Haiku para opción múltiple simple y explicaciones básicas; Sonnet para escenarios complejos, preguntas hard y explicaciones de temas que el usuario falla repetidamente. Routing definido en sección 8. |

---

*Próximas secciones por escribir: 3. Pipeline de RAG · 4. Contrato de API · 5. Arquitectura UI del quiz adaptativo · 6. Identidad visual de Cata · 7. Estados de UI · 8. Estrategia de costos y observabilidad · 9. Estructura de carpetas y stack final · 10. Autenticación y privacidad.*
