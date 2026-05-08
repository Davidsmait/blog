---
title: 'Bonus: Domina tu extracción — lo que tu shot te está diciendo'
description: 'La cola de ratón, la técnica salami, el rescate del café comercial y por qué la canasta simple lo cambia todo. Bonus interactivo de la Fase 2.'
publishedDate: 2026-04-18
tags:
  - espresso
  - extraccion
  - diagnostico
  - tecnica
  - bonus
isBonus: true
isPremium: false
draft: false
---

Completaste la Fase 2. Ya sabes medir un shot, hacer dial-in, y leer señales de channeling. Ahora vamos un nivel más profundo: entender la anatomía temporal de tu extracción — qué pasa exactamente en cada segundo — y cómo usar ese conocimiento para salvar incluso el café más mediocre.

Este bonus tiene cuatro partes interactivas. Puedes hacerlas en orden o ir directo a lo que más te interesa.

---

## Parte 1 — La cola de ratón: tu diagnóstico visual más poderoso

Cuando usas un portafiltro sin fondo (bottomless/naked), puedes ver el fondo de la canasta en vivo. El flujo que sale te dice todo antes de que pruebes el café.

El flujo ideal se llama **"cola de ratón"** (*rat tail*): un chorro delgado, simétrico, que emerge del centro de la canasta, oscuro al inicio y que se aclara gradualmente hacia el dorado ámbar.

<div class="extraction-visualizer" id="rat-tail-demo">
  <div class="ev-header">
    <h3 class="ev-title">Simulador de flujo de espresso</h3>
    <p class="ev-subtitle">Selecciona un escenario para ver qué pasa en el portafiltro</p>
  </div>

  <div class="ev-scenarios">
    <button class="ev-btn ev-btn--active" data-scenario="perfect">
      Cola de ratón perfecta
    </button>
    <button class="ev-btn" data-scenario="channeling">
      Channeling
    </button>
    <button class="ev-btn" data-scenario="gushing">
      Flujo demasiado rápido
    </button>
    <button class="ev-btn" data-scenario="choked">
      Flujo demasiado lento
    </button>
  </div>

  <div class="ev-stage">
    <div class="ev-basket">
      <div class="ev-basket-label">Fondo de canasta (vista naked)</div>
      <div class="ev-flow-container" id="flow-container">
        <div class="ev-drop-zone" id="drop-zone"></div>
      </div>
    </div>
    <div class="ev-info-panel" id="info-panel">
      <div class="ev-info-scenario" id="info-scenario">Cola de ratón perfecta</div>
      <div class="ev-info-diagnosis" id="info-diagnosis">Extracción uniforme</div>
      <div class="ev-info-description" id="info-description">
        El chorro emerge del centro, es delgado y simétrico. El color empieza oscuro y se aclara gradualmente hacia el ámbar dorado. Flujo constante sin interrupciones.
      </div>
      <div class="ev-info-action" id="info-action">
        <strong>Qué hacer:</strong> Nada. Este es el objetivo. Toma nota de tus parámetros para poder repetirlo.
      </div>
    </div>
  </div>

  <div class="ev-timeline">
    <div class="ev-timeline-label">Timeline de extracción</div>
    <div class="ev-timeline-bar">
      <div class="ev-timeline-segment ev-seg--pre"></div>
      <div class="ev-timeline-segment ev-seg--head"></div>
      <div class="ev-timeline-segment ev-seg--body"></div>
      <div class="ev-timeline-segment ev-seg--tail"></div>
    </div>
    <div class="ev-timeline-labels">
      <span>0s</span><span>Pre</span><span>Cabeza</span><span>Cuerpo</span><span>Cola</span><span>30s</span>
    </div>
  </div>
</div>

### Ejemplos en video — cola de ratón vs. channeling

<div class="video-row">
  <div class="video-block">
    <div class="video-label">Cola de ratón — extracción 1</div>
    <div class="video-short">
      <iframe
        src="https://www.youtube.com/embed/6PZAW0F_qn8?rel=0&modestbranding=1"
        title="Cola de ratón perfecta — extracción 1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="video-block">
    <div class="video-label">Cola de ratón — extracción 2</div>
    <div class="video-short">
      <iframe
        src="https://www.youtube.com/embed/EHiv_9sV0Pc?rel=0&modestbranding=1"
        title="Cola de ratón perfecta — extracción 2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="video-block">
    <div class="video-label">Channeling — qué evitar</div>
    <div class="video-short">
      <iframe
        src="https://www.youtube.com/embed/ozthKLF16NA?rel=0&modestbranding=1"
        title="Channeling en espresso"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>

### Lo que significa cada tipo de flujo

**Cola de ratón** — Extracción uniforme. El agua pasa homogéneamente por toda la cama de café. Cada partícula contribuye de forma equilibrada.

**Channeling** — El agua encontró un camino de mínima resistencia (grieta en el puck, distribución desigual, tamping inclinado) y se concentra ahí. Las zonas del canal se sobre-extraen, el resto se sub-extrae. El resultado: un shot que es amargo y ácido al mismo tiempo. WDT y tamping nivelado es la solución.

**Flujo rápido** — La molienda es demasiado gruesa o la dosis insuficiente. El agua pasa sin suficiente resistencia. Sub-extracción garantizada. Muele más fino como primer ajuste.

**Flujo lento** — La molienda es demasiado fina o la dosis excesiva. El agua no puede pasar bien. Sobre-extracción de lo poco que pasa. Muele más grueso.

---

## Parte 2 — La técnica salami: prueba cada momento de tu extracción

La **técnica salami** (o *salami shot*) es el ejercicio más revelador que puedes hacer como barista en casa. El nombre viene de la idea de "rebanar" tu extracción en segmentos, como un salami, para probar qué sabor tiene cada etapa.

<div class="salami-explorer" id="salami-explorer">
  <div class="se-header">
    <h3 class="se-title">Explorador de fases de extracción</h3>
    <p class="se-subtitle">Haz clic en cada fase para descubrir qué estás extrayendo</p>
  </div>

  <div class="se-shot-diagram">
    <div class="se-phase se-phase--pre" data-phase="pre" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Pre-infusión</div>
      <div class="se-phase-time">0 – 6s</div>
    </div>
    <div class="se-phase se-phase--head" data-phase="head" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Cabeza</div>
      <div class="se-phase-time">6 – 12s</div>
    </div>
    <div class="se-phase se-phase--body" data-phase="body" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Cuerpo</div>
      <div class="se-phase-time">12 – 25s</div>
    </div>
    <div class="se-phase se-phase--tail" data-phase="tail" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Cola</div>
      <div class="se-phase-time">25 – 30s</div>
    </div>
  </div>

  <div class="se-detail-panel" id="se-detail">
    <div class="se-detail-placeholder">
      Selecciona una fase para explorarla
    </div>
  </div>
</div>

### El experimento en video

<div class="video-block video-block--wide">
  <div class="video-label">Técnica salami — demostración de referencia</div>
  <div class="video-wide">
    <iframe
      src="https://www.youtube.com/embed/_yIpi5KPUys?rel=0&modestbranding=1"
      title="Técnica salami — demostración de referencia"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <p class="video-caption">Este video usa 12 vasos cambiando cada 5 segundos — una resolución más fina que la del ejercicio de 4 vasos que hacemos aquí, pero útil para ver la gradualidad completa de la extracción.</p>
</div>


### Por qué esto importa

El ejercicio salami te enseña algo fundamental: **tu shot no es un líquido homogéneo**. Es una secuencia donde diferentes compuestos se disuelven en diferentes momentos. Cuando pruebas cada fase por separado, entiendes de golpe por qué un shot "amargo" es diferente a uno "ácido" — no es el mismo café, es el mismo café en diferentes momentos.

<details>
<summary>Cómo hacer el experimento salami en casa</summary>

Necesitas 4 vasitos pequeños (de chupito o similar). El procedimiento es así:

1. Prepara tu receta normal y arranca la extracción
2. Los primeros segundos de flujo (antes de que salga líquido visible, si tienes pre-infusión) van al primer vasito
3. Los siguientes segundos de flujo oscuro (la cabeza) van al segundo vasito
4. La fase media — el cuerpo, cuando el flujo es ámbar dorado — va al tercer vasito. Esta es la parte más larga
5. Los últimos segundos antes de que blondee por completo (la cola) van al cuarto vasito
6. Prueba cada uno en orden. Deja que se enfríen un poco — el calor enmascara defectos

Lo que vas a notar: el primer vasito es casi imbebible — ácido, intenso, agresivo. El último es aguado y amargo. El del medio es donde vive todo lo bueno. Esto no es opinión — es química.

**Nota práctica:** No hagas esto con cada shot del día. Es un ejercicio de diagnóstico y educación, no una técnica de producción. Hazlo una o dos veces para internalizar el conocimiento, luego aplica ese conocimiento ajustando tus tiempos de corte.

</details>

---

## Parte 3 — El rescate del café comercial

Aquí está uno de los hacks más contraintuitivos del espresso: puedes hacer algo increíblemente sabroso con café oscuro y comercial si entiendes exactamente qué estás haciendo.

<div class="rescue-guide" id="rescue-guide">
  <div class="rg-header">
    <h3 class="rg-title">Guía de rescate: café comercial</h3>
    <p class="rg-subtitle">¿Tienes café de supermercado? Sácale lo mejor</p>
  </div>

  <div class="rg-problem">
    <div class="rg-problem-title">El problema con el café oscuro</div>
    <div class="rg-problem-content">
      Los cafés muy tostados (French roast, Italian roast, o lo que venden en la mayoría de supermercados) tienen un perfil de extracción muy diferente al café de especialidad:
      <ul>
        <li>La <strong>cabeza</strong> es brutal — amarga, quemada, agresiva</li>
        <li>El <strong>cuerpo</strong> aún contiene el dulzor del caramelizado y el cuerpo del grano</li>
        <li>La <strong>cola</strong> es amarga y aguada a la vez</li>
      </ul>
      El error que comete la mayoría: extraer el shot completo y luego quejarse de que sabe amargo.
    </div>
  </div>

  <div class="rg-steps">
    <div class="rg-step" data-step="1">
      <div class="rg-step-number">1</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Identifica tu ratio objetivo</div>
        <div class="rg-step-text">Con café oscuro, trabaja con un ratio más corto: 1:1.5 a 1:1.8 en lugar del estándar 1:2. Esto significa que si usas 18g, cortas en 27–32g de líquido en lugar de 36g. El cuerpo es más concentrado y evitas entrar en la zona amarga de la cola.</div>
      </div>
    </div>
    <div class="rg-step" data-step="2">
      <div class="rg-step-number">2</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Descarta los primeros segundos (la cabeza)</div>
        <div class="rg-step-text">Si tu máquina tiene pre-infusión, úsala. Si no, considera recolectar el shot completo y descartar los primeros 3–5ml antes de servir. Una alternativa: inclina ligeramente el vaso para que los primeros mililitros caigan al lado.</div>
      </div>
    </div>
    <div class="rg-step" data-step="3">
      <div class="rg-step-number">3</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Corta antes del blondeo</div>
        <div class="rg-step-text">Observa el flujo. En cuanto el color cambia de ámbar dorado a un tono más claro o rubio (blondeo), corta la extracción. No esperes el tiempo completo. El blondeo indica que los compuestos agradables ya pasaron.</div>
      </div>
    </div>
    <div class="rg-step" data-step="4">
      <div class="rg-step-number">4</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Baja la temperatura 2–3°C</div>
        <div class="rg-step-text">El café oscuro ya tiene compuestos pre-caramelizados que se extraen con más facilidad. Una temperatura más baja (91–93°C en lugar de 93–95°C) extrae los dulces sin llevarte los amargos pesados que se disuelven a alta temperatura.</div>
      </div>
    </div>
    <div class="rg-step" data-step="5">
      <div class="rg-step-number">5</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Prueba el resultado</div>
        <div class="rg-step-text">Con estas modificaciones, un café comercial puede sorprenderte: chocolatoso, con cuerpo, redondo, sin el amargor agresivo. No va a competir con un specialty bien tostado, pero vas a sacarle lo mejor que tiene.</div>
      </div>
    </div>
  </div>

  <div class="rg-calculator">
    <div class="rg-calc-title">Calculadora de corte por ratio</div>
    <div class="rg-calc-row">
      <label class="rg-calc-label">Dosis (g)</label>
      <input type="number" class="rg-calc-input" id="dose-input" value="18" min="10" max="25" />
    </div>
    <div class="rg-calc-row">
      <label class="rg-calc-label">Tipo de café</label>
      <select class="rg-calc-select" id="coffee-type">
        <option value="commercial">Comercial / Tostado oscuro</option>
        <option value="specialty">Especialidad / Tostado medio</option>
        <option value="light">Especialidad / Tostado claro</option>
      </select>
    </div>
    <div class="rg-calc-result" id="calc-result">
      <div class="rg-calc-result-row">
        <span>Yield objetivo</span>
        <strong id="result-yield">27 – 32g</strong>
      </div>
      <div class="rg-calc-result-row">
        <span>Ratio</span>
        <strong id="result-ratio">1:1.5 – 1:1.8</strong>
      </div>
      <div class="rg-calc-result-row">
        <span>Temperatura sugerida</span>
        <strong id="result-temp">91 – 93°C</strong>
      </div>
      <div class="rg-calc-result-row">
        <span>Estrategia de corte</span>
        <strong id="result-cut">Corta al primer blondeo</strong>
      </div>
    </div>
  </div>
</div>


---

## Parte 4 — Canasta simple vs. doble pared: por qué tu filtro importa

<details>
<summary>¿Qué es la canasta doble pared y por qué la mayoría de máquinas baratas la incluyen?</summary>

La **canasta de doble pared** (también llamada filtro presurizado) tiene dos capas de metal con un pequeño orificio entre ellas. Lo que hace es artificial: independientemente de cómo muelas el café o cuánto lo extraigas, el agua pasa por ese pequeño orificio y genera una presión constante. El resultado visual es una "crema" que se ve bien pero no es real — son burbujas creadas por la presión mecánica, no por los aceites del café.

**Por qué existe:** Las máquinas de entrada incluyen canastas de doble pared porque perdonan errores. Con una canasta doble pared puedes usar café de supermercado mal molido y aun así obtener algo que parece espresso. Es accesible para quien no quiere aprender la técnica.

**El problema:** Oculta todo. No puedes diagnosticar nada. El channeling, la distribución, el ratio, la temperatura — nada de eso es visible en el resultado porque la doble pared nivela todo artificialmente.

</details>

<details>
<summary>La canasta simple (single wall): por qué es el estándar profesional</summary>

La **canasta simple** (single wall, no presurizada) no tiene esa trampa. El agua pasa directamente a través de la cama de café y sale por los agujeros del fondo. Esto significa:

- La crema que ves es **real** — viene de los aceites del café disueltos bajo presión
- El flujo te dice exactamente cómo está tu extracción (es donde existe la cola de ratón)
- Los errores de técnica son visibles e inmediatamente corregibles
- El sabor es más complejo, con más cuerpo, con matices que la doble pared aplana

**El catch:** Requiere molienda correcta, dosis correcta, distribución y tamping adecuados. Si algo falla, lo ves y lo sientes. Eso es precisamente por qué aprenderás más rápido con ella.

Si tu máquina incluye ambos tipos de canasta, cambia a la simple ahora. Si solo tienes doble pared, considera comprar una canasta simple compatible (generalmente $8–20 USD, asegúrate que sea de 58mm).

</details>

<details>
<summary>¿Qué es el puck screen y cómo mejora cualquier canasta?</summary>

El **puck screen** es un disco metálico delgado con pequeñas perforaciones que colocas encima del café molido, antes de insertar el portafiltro en la máquina.

**Lo que hace:** Distribuye el agua que sale de la ducha de la máquina de forma más uniforme sobre toda la superficie del puck. Esto reduce el channeling provocado por jets de agua desiguales desde la ducha.

**Beneficios:** Menos channeling desde la superficie, puck más limpio al retirar el portafiltro, extracción más uniforme sin cambios en la receta.

**Cuánto cuesta:** Entre $10–25 USD. Es una de las mejoras de mayor impacto por menor costo que puedes hacer. El puck screen no reemplaza una buena distribución con WDT — es un complemento, no un sustituto.

</details>


---

## Ejercicio práctico: el experimento de los tres shots

Este es el ejercicio que integra todo lo que aprendiste en este bonus. Necesitas 30–45 minutos y 3–4 porciones de café.

**Shot 1 — Baseline:** Haz tu receta normal. Observa el flujo. Toma nota del sabor. Esto es tu punto de referencia.

**Shot 2 — El salami:** Divide la extracción en tres vasitos (cabeza / cuerpo / cola). Prueba cada uno. Identifica en qué momento tu shot está bien y en qué momento se arruina.

**Shot 3 — Solo el cuerpo:** Basado en lo que aprendiste en el shot 2, ajusta tu tiempo de corte para quedarte solo en la zona que sabía bien. Si la cabeza fue demasiado agresiva, dale un poco más de tiempo a la pre-infusión antes de abrir al vaso. Si la cola fue la que lo arruinó, corta antes.

**Shot 4 (opcional) — Aplicación al café comercial:** Si tienes café oscuro o comercial, aplica la estrategia de la Parte 3. Compara con el shot 3.


---

<style>
/* ── Video embeds ── */
.video-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.25rem 0;
}
@media (max-width: 700px) { .video-row { grid-template-columns: 1fr; } }

.video-block { display: flex; flex-direction: column; gap: 0.5rem; }
.video-block--wide { margin: 1.25rem 0; }

.video-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-text-muted, #888);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Shorts — proporción 9:16 */
.video-short {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%;
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
}
.video-short iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Video largo — proporción 16:9 */
.video-wide {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
}
.video-wide iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-caption {
  font-size: 0.78rem;
  color: var(--color-text-muted, #888);
  margin-top: 0.4rem;
  line-height: 1.5;
}

/* ── Media placeholders ── */
.media-grid {
  display: grid;
  gap: 1rem;
  margin: 1.25rem 0;
}
.media-grid--1 { grid-template-columns: 1fr; max-width: 400px; }
.media-grid--2 { grid-template-columns: repeat(2, 1fr); }
.media-grid--3 { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 640px) {
  .media-grid--1,
  .media-grid--2,
  .media-grid--3 { grid-template-columns: 1fr; }
}

.media-placeholder {
  border: 1.5px dashed color-mix(in srgb, var(--color-accent) 35%, transparent);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  text-align: center;
  background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg));
  min-height: 140px;
  transition: border-color 0.2s, background 0.2s;
}
.media-placeholder:hover {
  border-color: color-mix(in srgb, var(--color-accent) 60%, transparent);
  background: color-mix(in srgb, var(--color-accent) 7%, var(--color-bg));
}
.media-placeholder--video { border-style: dashed; }
.media-placeholder--image { border-style: dashed; }

.mp-icon {
  width: 36px;
  height: 36px;
  color: color-mix(in srgb, var(--color-accent) 70%, transparent);
}
.mp-icon svg { width: 100%; height: 100%; }

.mp-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.3;
}
.mp-hint {
  font-size: 0.75rem;
  color: var(--color-text-muted, #888);
  line-height: 1.3;
}

/* ── Extraction Visualizer ── */
.extraction-visualizer {
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  font-family: var(--font-body, sans-serif);
}
.ev-header { margin-bottom: 1.25rem; }
.ev-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--color-text); }
.ev-subtitle { font-size: 0.85rem; color: var(--color-text-muted, #888); margin: 0; }

.ev-scenarios {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}
.ev-btn {
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
  background: transparent;
  color: var(--color-text);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.18s ease;
}
.ev-btn:hover { background: color-mix(in srgb, var(--color-accent) 12%, transparent); }
.ev-btn--active {
  background: color-mix(in srgb, var(--color-accent) 20%, transparent);
  border-color: var(--color-accent);
  color: var(--color-accent);
  font-weight: 600;
}

.ev-stage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
@media (max-width: 600px) { .ev-stage { grid-template-columns: 1fr; } }

.ev-basket {
  background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg));
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 160px;
}
.ev-basket-label { font-size: 0.75rem; color: var(--color-text-muted, #888); margin-bottom: 0.75rem; text-align: center; }
.ev-flow-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-accent) 8%, var(--color-bg));
  border: 2px dashed color-mix(in srgb, var(--color-accent) 30%, transparent);
  position: relative;
  overflow: hidden;
}
.ev-drop-zone { position: absolute; inset: 0; }

.ev-info-panel { display: flex; flex-direction: column; gap: 0.5rem; }
.ev-info-scenario { font-weight: 700; font-size: 1rem; color: var(--color-accent); }
.ev-info-diagnosis { font-size: 0.85rem; font-weight: 600; color: var(--color-text); }
.ev-info-description { font-size: 0.82rem; color: var(--color-text); line-height: 1.5; }
.ev-info-action {
  font-size: 0.82rem;
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
  border-left: 3px solid var(--color-accent);
  padding: 0.5rem 0.75rem;
  border-radius: 0 6px 6px 0;
  color: var(--color-text);
  line-height: 1.5;
}

.ev-timeline { margin-top: 0.5rem; }
.ev-timeline-label { font-size: 0.75rem; color: var(--color-text-muted, #888); margin-bottom: 0.4rem; }
.ev-timeline-bar { display: flex; height: 12px; border-radius: 6px; overflow: hidden; gap: 2px; margin-bottom: 0.35rem; }
.ev-timeline-segment { flex: 1; border-radius: 3px; }
.ev-seg--pre { background: color-mix(in srgb, var(--color-accent) 25%, transparent); }
.ev-seg--head { background: color-mix(in srgb, var(--color-accent) 50%, transparent); }
.ev-seg--body { flex: 2; background: var(--color-accent); }
.ev-seg--tail { background: color-mix(in srgb, var(--color-accent) 35%, transparent); }
.ev-timeline-labels { display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--color-text-muted, #888); }

/* ── Salami Explorer ── */
.salami-explorer {
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
}
.se-header { margin-bottom: 1.25rem; }
.se-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--color-text); }
.se-subtitle { font-size: 0.85rem; color: var(--color-text-muted, #888); margin: 0; }

.se-shot-diagram { display: flex; gap: 4px; height: 80px; margin-bottom: 1.25rem; border-radius: 8px; overflow: hidden; }
.se-phase {
  display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
  padding: 0.5rem 0.25rem; cursor: pointer; border-radius: 6px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border: 2px solid transparent; position: relative; overflow: hidden;
}
.se-phase:focus { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.se-phase:hover { transform: translateY(-3px); }
.se-phase--pre { flex: 0.7; background: color-mix(in srgb, #6366f1 20%, var(--color-bg)); }
.se-phase--head { flex: 1; background: color-mix(in srgb, #f59e0b 30%, var(--color-bg)); }
.se-phase--body { flex: 2; background: color-mix(in srgb, var(--color-accent) 40%, var(--color-bg)); }
.se-phase--tail { flex: 0.8; background: color-mix(in srgb, #ef4444 20%, var(--color-bg)); }
.se-phase--selected { border-color: var(--color-accent); transform: translateY(-4px); box-shadow: 0 8px 20px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.se-phase-bar { position: absolute; inset: 0; opacity: 0.15; }
.se-phase-label { font-size: 0.72rem; font-weight: 600; color: var(--color-text); text-align: center; position: relative; z-index: 1; }
.se-phase-time { font-size: 0.65rem; color: var(--color-text-muted, #888); position: relative; z-index: 1; }

.se-detail-panel {
  background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg));
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
  border-radius: 8px; padding: 1rem 1.25rem; min-height: 120px;
  display: flex; align-items: center;
}
.se-detail-placeholder { color: var(--color-text-muted, #888); font-size: 0.85rem; text-align: center; width: 100%; }
.se-detail-content { width: 100%; }
.se-detail-phase-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; }
.se-detail-compounds { font-size: 0.8rem; color: var(--color-accent); font-weight: 600; margin-bottom: 0.5rem; }
.se-detail-taste { font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--color-text); line-height: 1.5; }
.se-detail-verdict { font-size: 0.82rem; padding: 0.4rem 0.75rem; border-radius: 6px; font-weight: 600; }
.se-verdict--bad { background: color-mix(in srgb, #ef4444 15%, transparent); color: #ef4444; }
.se-verdict--good { background: color-mix(in srgb, #22c55e 15%, transparent); color: #22c55e; }
.se-verdict--neutral { background: color-mix(in srgb, #6366f1 15%, transparent); color: #6366f1; }

/* ── Rescue Guide ── */
.rescue-guide {
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
  border-radius: 12px; padding: 1.5rem; margin: 2rem 0;
}
.rg-header { margin-bottom: 1rem; }
.rg-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--color-text); }
.rg-subtitle { font-size: 0.85rem; color: var(--color-text-muted, #888); margin: 0; }
.rg-problem { background: color-mix(in srgb, #ef4444 8%, var(--color-bg)); border: 1px solid color-mix(in srgb, #ef4444 25%, transparent); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; }
.rg-problem-title { font-weight: 700; font-size: 0.9rem; color: #ef4444; margin-bottom: 0.5rem; }
.rg-problem-content { font-size: 0.85rem; color: var(--color-text); line-height: 1.6; }
.rg-problem-content ul { margin: 0.5rem 0 0 1rem; padding: 0; }
.rg-problem-content li { margin-bottom: 0.25rem; }
.rg-steps { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem; }
.rg-step { display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.75rem; background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg)); border-radius: 8px; border: 1px solid color-mix(in srgb, var(--color-accent) 12%, transparent); transition: border-color 0.2s; }
.rg-step:hover { border-color: color-mix(in srgb, var(--color-accent) 35%, transparent); }
.rg-step-number { width: 28px; height: 28px; background: var(--color-accent); color: var(--color-bg, #000); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
.rg-step-content { flex: 1; }
.rg-step-title { font-weight: 700; font-size: 0.9rem; color: var(--color-text); margin-bottom: 0.3rem; }
.rg-step-text { font-size: 0.82rem; color: var(--color-text); line-height: 1.55; }
.rg-calculator { background: color-mix(in srgb, var(--color-accent) 8%, var(--color-bg)); border: 1px solid color-mix(in srgb, var(--color-accent) 25%, transparent); border-radius: 8px; padding: 1rem; }
.rg-calc-title { font-weight: 700; font-size: 0.9rem; color: var(--color-text); margin-bottom: 0.75rem; }
.rg-calc-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
.rg-calc-label { font-size: 0.82rem; color: var(--color-text); min-width: 90px; }
.rg-calc-input, .rg-calc-select { padding: 0.35rem 0.6rem; border-radius: 6px; border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent); background: var(--color-bg); color: var(--color-text); font-size: 0.82rem; outline: none; }
.rg-calc-input:focus, .rg-calc-select:focus { border-color: var(--color-accent); }
.rg-calc-result { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.4rem; }
.rg-calc-result-row { display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0.6rem; background: color-mix(in srgb, var(--color-accent) 5%, var(--color-bg)); border-radius: 6px; font-size: 0.82rem; }
.rg-calc-result-row span { color: var(--color-text-muted, #888); }
.rg-calc-result-row strong { color: var(--color-text); }
</style>

<script>
(function () {
  // ── Rat Tail Visualizer ──
  const scenarios = {
    perfect: {
      label: 'Cola de ratón perfecta',
      diagnosis: 'Extracción uniforme',
      description: 'El chorro emerge del centro, es delgado y simétrico. El color empieza oscuro y se aclara gradualmente hacia el ámbar dorado. Flujo constante sin interrupciones.',
      action: 'Nada. Este es el objetivo. Toma nota de tus parámetros para poder repetirlo.'
    },
    channeling: {
      label: 'Channeling',
      diagnosis: 'Agua tomando caminos de mínima resistencia',
      description: 'Ves chorros laterales o jets disparados. El agua encontró grietas en el puck. Resultado: amargo y ácido al mismo tiempo.',
      action: 'Mejora tu distribución con WDT antes del tamping. Verifica que tu tamping sea perfectamente horizontal. Considera un puck screen.'
    },
    gushing: {
      label: 'Flujo demasiado rápido',
      diagnosis: 'Sub-extracción por falta de resistencia',
      description: 'El espresso sale como agua, claro y rápido. El shot termina en menos de 20 segundos. La molienda es demasiado gruesa o la dosis insuficiente.',
      action: 'Muele más fino como primer ajuste. Si ya estás en el límite del molino, aumenta la dosis 0.5g.'
    },
    choked: {
      label: 'Flujo demasiado lento',
      diagnosis: 'Sobre-extracción o puck bloqueado',
      description: 'Las gotas apenas caen o el flujo es extremadamente lento. La molienda es demasiado fina o la dosis excesiva.',
      action: 'Muele más grueso como primer ajuste. Reduce la dosis 0.5g si ya ajustaste la molienda.'
    }
  }

  const dropZone = document.getElementById('drop-zone')
  const infoScenario = document.getElementById('info-scenario')
  const infoDiagnosis = document.getElementById('info-diagnosis')
  const infoDescription = document.getElementById('info-description')
  const infoAction = document.getElementById('info-action')
  let animFrame = null
  let tick = 0

  function animatePerfect () {
    dropZone.innerHTML = ''
    tick++
    const p = (tick % 60) / 60
    const d = document.createElement('div')
    d.style.cssText = `position:absolute;width:${4 + p * 2}px;height:40%;left:50%;top:10%;transform:translateX(-50%);background:hsl(35,${70 - p * 30}%,${30 + p * 25}%);border-radius:4px 4px 0 0;opacity:${0.5 + p * 0.5};`
    dropZone.appendChild(d)
    animFrame = requestAnimationFrame(animatePerfect)
  }

  function animateChanneling () {
    dropZone.innerHTML = ''
    tick++
    ;[{ x: 22, a: -20 }, { x: 70, a: 15 }, { x: 45, a: -5 }].forEach((j, i) => {
      const ph = (tick + i * 20) % 60
      if (ph < 45) {
        const d = document.createElement('div')
        d.style.cssText = `position:absolute;width:3px;height:${15 + ph / 2}px;left:${j.x}%;top:15%;transform:translate(-50%,0) rotate(${j.a}deg);transform-origin:top center;background:#f59e0b;border-radius:3px;opacity:${0.5 + ph / 90};`
        dropZone.appendChild(d)
      }
    })
    animFrame = requestAnimationFrame(animateChanneling)
  }

  function animateGushing () {
    dropZone.innerHTML = ''
    tick++
    const p = (tick % 30) / 30
    const d = document.createElement('div')
    d.style.cssText = `position:absolute;width:${30 + p * 10}px;height:${30 + p * 10}px;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;background:#6366f1;opacity:${0.6 - p * 0.4};`
    dropZone.appendChild(d)
    animFrame = requestAnimationFrame(animateGushing)
  }

  function animateDrip () {
    dropZone.innerHTML = ''
    tick++
    const ph = tick % 90
    if (ph < 15) {
      const p = ph / 15
      const d = document.createElement('div')
      d.style.cssText = `position:absolute;width:${3 + p * 2}px;height:${3 + p * 2}px;left:50%;top:${20 + p * 40}%;transform:translate(-50%,-50%);border-radius:50%;background:#ef4444;opacity:${0.8 - p * 0.3};`
      dropZone.appendChild(d)
    }
    animFrame = requestAnimationFrame(animateDrip)
  }

  function renderScenario (key) {
    if (animFrame) cancelAnimationFrame(animFrame)
    const s = scenarios[key]
    infoScenario.textContent = s.label
    infoDiagnosis.textContent = s.diagnosis
    infoDescription.textContent = s.description
    infoAction.innerHTML = '<strong>Qué hacer:</strong> ' + s.action
    if (key === 'perfect') animatePerfect()
    else if (key === 'channeling') animateChanneling()
    else if (key === 'gushing') animateGushing()
    else animateDrip()
  }

  document.querySelectorAll('.ev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ev-btn').forEach(b => b.classList.remove('ev-btn--active'))
      btn.classList.add('ev-btn--active')
      renderScenario(btn.dataset.scenario)
    })
  })
  renderScenario('perfect')

  // ── Salami Explorer ──
  const phaseData = {
    pre: {
      name: 'Pre-infusión',
      color: '#6366f1',
      compounds: 'Saturación del puck · Sin extracción real',
      taste: 'El agua hidrata la cama de café sin presión completa. No hay líquido significativo aún. Es la fase donde el café absorbe agua de forma uniforme antes de que comience la extracción real.',
      verdict: 'neutral',
      verdictText: 'Preparación — sin sabor aún'
    },
    head: {
      name: 'Cabeza',
      color: '#f59e0b',
      compounds: 'Ácidos orgánicos · Cafeína · Compuestos solubles simples',
      taste: 'Muy ácido, intenso, agresivo. Alta concentración de ácidos clorogénicos que son los compuestos más solubles del café. Si pruebas solo esto, el café es prácticamente imbebible.',
      verdict: 'bad',
      verdictText: 'Subextraído — ácido e intenso'
    },
    body: {
      name: 'Cuerpo',
      color: 'var(--color-accent)',
      compounds: 'Azúcares · Aceites · Compuestos de Maillard · Melanoidinas',
      taste: 'Aquí vive todo lo que buscas. Los ácidos se suavizan y entran los azúcares caramelizados, las melanoidinas, los aceites que dan textura, y los compuestos de Maillard. Dulzura natural, balance, complejidad.',
      verdict: 'good',
      verdictText: 'El objetivo — aquí vive el sabor'
    },
    tail: {
      name: 'Cola',
      color: '#ef4444',
      compounds: 'Taninos · Celulosa parcial · Compuestos pesados amargos',
      taste: 'Amargo, aguado, astringente. El agua disuelve ahora los compuestos más pesados: taninos, celulosa parcialmente disuelta. El flujo se aclara (blondeo) pero lo que queda es indeseable.',
      verdict: 'bad',
      verdictText: 'Sobreextraído — amargo y astringente'
    }
  }

  const seDetail = document.getElementById('se-detail')
  document.querySelectorAll('.se-phase').forEach(phase => {
    phase.addEventListener('click', () => {
      const data = phaseData[phase.dataset.phase]
      document.querySelectorAll('.se-phase').forEach(p => p.classList.remove('se-phase--selected'))
      phase.classList.add('se-phase--selected')
      seDetail.innerHTML = `
        <div class="se-detail-content">
          <div class="se-detail-phase-name" style="color:${data.color}">${data.name}</div>
          <div class="se-detail-compounds">${data.compounds}</div>
          <div class="se-detail-taste">${data.taste}</div>
          <div class="se-detail-verdict se-verdict--${data.verdict}">${data.verdictText}</div>
        </div>`
    })
    phase.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); phase.click() }
    })
  })

  // ── Rescue Calculator ──
  const doseInput = document.getElementById('dose-input')
  const coffeeType = document.getElementById('coffee-type')
  const resultYield = document.getElementById('result-yield')
  const resultRatio = document.getElementById('result-ratio')
  const resultTemp = document.getElementById('result-temp')
  const resultCut = document.getElementById('result-cut')

  const profiles = {
    commercial: { lo: 1.5, hi: 1.8, temp: '91 – 93°C', cut: 'Corta al primer blondeo' },
    specialty:  { lo: 1.9, hi: 2.2, temp: '93 – 94°C', cut: 'Corta en 25–30s según sabor' },
    light:      { lo: 2.2, hi: 2.5, temp: '94 – 96°C', cut: 'Permite extracción completa' }
  }

  function updateCalc () {
    const dose = parseFloat(doseInput.value) || 18
    const p = profiles[coffeeType.value]
    resultYield.textContent = `${(dose * p.lo).toFixed(0)} – ${(dose * p.hi).toFixed(0)}g`
    resultRatio.textContent = `1:${p.lo} – 1:${p.hi}`
    resultTemp.textContent = p.temp
    resultCut.textContent = p.cut
  }

  doseInput && doseInput.addEventListener('input', updateCalc)
  coffeeType && coffeeType.addEventListener('change', updateCalc)
  updateCalc()
})()
</script>
