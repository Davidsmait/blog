# Auditoría Completa — davidblog

**Proyecto:** davidsanluisaguirre.com (Astro + Tailwind + MDX)
**Fecha:** 6 de marzo de 2026
**Auditor:** Claude (IA)
**Archivos analizados:** 60+ archivos en `src/`

---

## 1. CALIDAD DE CÓDIGO

### 1.1 — `any` explícitos sin tipado en plugins

**Archivo:** `src/plugins/readingTimePlugin.ts` (líneas 6-7)
**Problema:** Se usa `any` dos veces con `eslint-disable` para evitar el error, en lugar de tipar correctamente los parámetros del plugin de remark.

```ts
// ACTUAL
export default function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (tree: any, { data }: any) {
```

**Impacto:** Medio
**Solución:**
```ts
import type { Root } from 'mdast'

interface RemarkFile {
  data: {
    astro: {
      frontmatter: Record<string, unknown>
    }
  }
}

export default function () {
  return function (tree: Root, { data }: RemarkFile) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    data.astro.frontmatter.readingTime = readingTime.text
  }
}
```

---

### 1.2 — `any` extensivo en codeHeadersPlugin.ts

**Archivo:** `src/plugins/codeHeadersPlugin.ts` (líneas 1, 80, 84)
**Problema:** Todo el archivo desactiva `@typescript-eslint/no-explicit-any` globalmente y usa `any` en la firma de `postprocess` y `pre`. El helper `parseStyleProps` no maneja cadenas malformadas (sin `:`).

**Impacto:** Medio
**Solución:**
```ts
// Tipar las funciones con las interfaces de Shiki
import type { ShikiTransformer } from 'shiki'

export default {
  postprocess(html: string, options: { meta?: { __raw?: string }; lang?: string }) {
    const codeHeader = generateHeader(options.meta?.__raw, options.lang)
    return html.replace(PLACEHOLDER, codeHeader)
  },
  pre(pre: { properties: { style: string }; [key: string]: unknown }) {
    // ...
  }
} satisfies ShikiTransformer

// parseStyleProps robusto:
function parseStyleProps(style: string): Record<string, string> {
  const propMap: Record<string, string> = {}
  for (const prop of style.split(';')) {
    const idx = prop.indexOf(':')
    if (idx === -1) continue
    propMap[prop.slice(0, idx).trim()] = prop.slice(idx + 1).trim()
  }
  return propMap
}
```

---

### 1.3 — Llamadas a `getCollection` repetidas sin caché

**Archivos:** `src/util/tags.ts` (línea 26), `src/pages/tags/index.astro` (línea 29)
**Problema:** `generateTags()` invoca `getPosts()`, `getCafePosts()` y `getProjects()`, cada uno con su propio `getCollection()`. En `tags/index.astro`, además se llama `getTagUsage(tag)` *dentro del template* para cada tag, lo que ejecuta 3 llamadas a `getCollection` por cada tag renderizado. Con 10 tags = 30 llamadas extra.

**Impacto:** Alto
**Solución:**
```ts
// tags/index.astro — calcular usage en el frontmatter, no en el template
const tags = await generateTags()
const tagUsages = new Map<string, number>()
const [posts, cafePosts, projects] = await Promise.all([
  getPosts(), getCafePosts(), getProjects()
])
for (const { tag } of tags) {
  const count =
    posts.filter(p => p.data.tags.some(t => t.toLowerCase() === tag)).length +
    cafePosts.filter(p => p.data.tags.some(t => t.toLowerCase() === tag)).length +
    projects.filter(p => p.data.tags.some(t => t.toLowerCase() === tag)).length
  tagUsages.set(tag, count)
}
// En el template: {tagUsages.get(tag)}
```

---

### 1.4 — Mutación de props en PostsList y ProjectsList

**Archivos:** `src/components/PostsList.astro` (línea 16), `src/components/ProjectsList.astro` (línea 15)
**Problema:** Se llama `posts.sort(...)` directamente sobre la prop recibida, mutando el array original del padre. En Astro esto funciona por ser SSR, pero es un anti-patrón que puede generar bugs difíciles de rastrear si se reutiliza el array.

**Impacto:** Bajo
**Solución:**
```ts
// Crear copia antes de ordenar
const sortedPosts = [...posts].sort((a, b) =>
  b.data.publishedDate.getTime() - a.data.publishedDate.getTime()
)
```

---

### 1.5 — Archivos de rutas duplicados: `[...page].astro` y `[page].astro`

**Archivos:** `src/pages/posts/[...page].astro` y `src/pages/posts/[page].astro`, `src/pages/cafe/[...page].astro` y `src/pages/cafe/[page].astro`, `src/pages/projects/[...page].astro` y `src/pages/projects/[page].astro`
**Problema:** Existen dos archivos de paginación para cada sección. El catch-all `[...page]` ya cubre la ruta `/posts`, `/posts/1`, `/posts/2`, etc. El archivo `[page]` es redundante y puede causar conflictos de rutas en Astro.

**Impacto:** Alto
**Solución:** Eliminar los archivos `[page].astro` y conservar solo `[...page].astro` que ya maneja tanto la ruta base como las paginadas.

---

### 1.6 — Validación de licencia insegura (client-side only)

**Archivo:** `src/scripts/premium.ts` (líneas 44-65)
**Problema:** `validateLicense()` acepta cualquier UUID como válido si la Netlify Function no está disponible (línea 64: `return true`). Esto significa que cualquier usuario puede inventar un UUID y desbloquear todo el contenido premium.

**Impacto:** Alto
**Solución:**
```ts
export async function validateLicense(key: string): Promise<boolean> {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  if (!uuidRegex.test(key)) return false

  try {
    const res = await fetch('/.netlify/functions/validate-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: key })
    })
    if (res.ok) {
      const data = await res.json()
      return data.valid === true
    }
    // Si el servidor responde con error, rechazar
    return false
  } catch {
    // Si no hay red, rechazar (no aceptar por defecto)
    return false
  }
}
```

---

### 1.7 — Lemon Squeezy script loader sin timeout ni cleanup

**Archivo:** `src/scripts/lemonSqueezy.ts` (líneas 49-56)
**Problema:** El polling con `setInterval` para esperar que el script cargue no tiene timeout. Si el script falla silenciosamente, la Promise nunca se resuelve (memory leak).

**Impacto:** Medio
**Solución:**
```ts
if (scriptLoading) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearInterval(check)
      reject(new Error('Lemon Squeezy script loading timeout'))
    }, 10000)
    const check = setInterval(() => {
      if (scriptLoaded) {
        clearInterval(check)
        clearTimeout(timeout)
        resolve()
      }
    }, 100)
  })
}
```

---

### 1.8 — `quizId` generado con `Math.random()` no es determinista para SSR

**Archivo:** `src/components/Quiz.astro` (línea 21)
**Problema:** `Math.random().toString(36).slice(2, 8)` genera IDs diferentes en cada build, lo que impide caching efectivo y puede causar hydration mismatches en escenarios de SSR.

**Impacto:** Bajo
**Solución:**
```ts
// Usar un hash basado en el contenido de las preguntas
const quizId = `quiz-${questions.map(q => q.question).join('').slice(0, 20).replace(/\W/g, '')}`
```

---

### 1.9 — `cafeSchema` tipado con `Function` genérica

**Archivo:** `src/content/config.ts` (línea 19)
**Problema:** El parámetro `image` se tipa como `Function` en lugar de usar el tipo específico de Astro.

**Impacto:** Bajo
**Solución:**
```ts
import type { ImageFunction } from 'astro:content'

const cafeSchema = ({ image }: { image: ImageFunction }) =>
```

---

### 1.10 — Descripción del sitio no actualizada

**Archivo:** `src/theme.config.ts` (línea 6)
**Problema:** La descripción dice "A minimal Astro blog theme" — texto del template original, no describe el blog de David.

**Impacto:** Medio (afecta SEO y Open Graph)
**Solución:**
```ts
description: 'Blog personal de David San Luis Aguirre — desarrollo web, proyectos y café de especialidad.',
```

---

## 2. DISEÑO UI

### 2.1 — Contraste WCAG insuficiente en scheme-warm (modo oscuro)

**Archivo:** `src/style/color-schemes.css` (líneas 32-40)
**Problema:** En `scheme-warm` dark mode, el acento es `rgb(200, 149, 108)` sobre fondo `rgb(15, 13, 11)`. El ratio de contraste es ~7.2:1 (pasa AA), pero el texto con `opacity: 0.3-0.5` (usado extensamente en labels, descriptions, progreso, etc.) reduce el contraste efectivo drásticamente. Elementos como `.rm-desc` (`opacity: 0.4`) sobre fondo oscuro quedan en ~2.9:1, **muy por debajo de WCAG AA (4.5:1)**.

**Impacto:** Alto
**Solución:** En lugar de usar `opacity` para crear jerarquía visual, usar colores explícitos con suficiente contraste:
```css
/* En lugar de opacity: 0.4 */
.rm-desc {
  color: color-mix(in srgb, var(--color-accent) 65%, rgb(var(--accent-bg)));
  opacity: 1;
}
```
O definir variables CSS de color secundario que garanticen 4.5:1 mínimo.

---

### 2.2 — Opacidad excesiva como sistema de jerarquía

**Archivos:** Múltiples — `LessonLayout.astro`, `PostsList.astro`, `barista-roadmap.astro`, `Footer.astro`, `index.astro`
**Problema:** El proyecto usa `opacity` en al menos 40+ lugares para crear jerarquía visual (0.25, 0.3, 0.35, 0.4, 0.5, 0.6, 0.65, 0.7, 0.75, 0.82...). Esto es problemático porque:

1. No se puede controlar el contraste real en cada esquema de color.
2. Las opacidades se apilan cuando hay elementos anidados (p.ej. un `li` con `opacity: 0.82` dentro de un `div` con `opacity: 0.75` = contraste efectivo de 0.615).
3. Hay al menos 12 valores distintos de opacidad, sin un sistema consistente.

**Impacto:** Alto
**Solución:** Definir un sistema de 3-4 niveles de texto con colores concretos:
```css
:root {
  --text-primary: rgb(var(--accent)); /* 1.0 */
  --text-secondary: color-mix(in srgb, rgb(var(--accent)) 72%, rgb(var(--accent-bg)));
  --text-tertiary: color-mix(in srgb, rgb(var(--accent)) 50%, rgb(var(--accent-bg)));
  --text-muted: color-mix(in srgb, rgb(var(--accent)) 35%, rgb(var(--accent-bg)));
}
```

---

### 2.3 — Mezcla de sistemas de estilo: Tailwind utilities + CSS custom

**Archivos:** `LessonLayout.astro` (CSS custom), `PostsList.astro` (Tailwind), `barista-roadmap.astro` (CSS custom), `Header.astro` (Tailwind), `index.astro` (Tailwind)
**Problema:** Algunos componentes usan exclusivamente clases de Tailwind, otros usan `<style>` scoped con CSS custom, y otros mezclan ambos. No hay un criterio claro de cuándo usar cada enfoque.

**Impacto:** Medio
**Solución:** Establecer una convención: usar Tailwind para layouts simples y componentes reutilizables; CSS scoped para componentes complejos con muchos estados (como el roadmap timeline). Documentar la decisión en un `CONTRIBUTING.md`.

---

### 2.4 — Fuentes cargadas de forma inconsistente

**Archivos:** `BaseLayout.astro` (línea 3: `@fontsource/ibm-plex-sans`), `LessonLayout.astro` (línea 124: Google Fonts `Source Serif 4`)
**Problema:** IBM Plex Sans se carga vía `@fontsource` (self-hosted, buena práctica) pero Source Serif 4 se carga desde Google Fonts CDN. Esto crea un request blocking externo e inconsistencia en la estrategia de carga de fuentes.

**Impacto:** Medio
**Solución:** Instalar Source Serif 4 vía fontsource:
```bash
pnpm add @fontsource/source-serif-4
```
```ts
// LessonLayout.astro
import '@fontsource/source-serif-4/latin.css'
// Eliminar el <link> a Google Fonts
```

---

### 2.5 — Variables CSS `--accent` vs `--color-accent` inconsistentes

**Archivos:** `color-schemes.css` define `--accent` y `--accent-bg` como tripletas RGB. `tailwind.config.cjs` las consume como `rgba(var(--accent), opacity)`. Pero `LessonLayout.astro` y `barista-roadmap.astro` usan `var(--color-accent)` que viene de `color-mix` con la tripleta RGB. `main.css` usa `@apply bg-accent-bg` (Tailwind).
**Problema:** Hay dos sistemas de color coexistiendo: el de Tailwind (que usa `rgba(var(--accent))`) y el CSS directo (que usa `var(--color-accent)` que no existe como variable definida explícitamente). `--color-accent` probablemente funciona porque `color-mix(in srgb, var(--color-accent)...)` lo interpreta como custom property con fallback, pero no está definida como tal en ningún lugar.

**Impacto:** Medio
**Solución:** Unificar el sistema de color. Definir `--color-accent` explícitamente o migrar todo al sistema de Tailwind:
```css
:root {
  --color-accent: rgb(var(--accent));
  --color-accent-bg: rgb(var(--accent-bg));
}
```

---

### 2.6 — Footer inconsistente entre landing page e internas

**Archivos:** `src/pages/index.astro` (líneas 95-103), `src/components/layout/Footer.astro`
**Problema:** La página de inicio tiene un footer custom inline con diferente estructura y disposición que el `Footer.astro` reutilizable de las páginas internas. El footer del index muestra los ítems a la derecha y el texto a la izquierda, mientras que `Footer.astro` los organiza de forma diferente.

**Impacto:** Bajo
**Solución:** Reutilizar el componente `Footer.astro` en el index o extraer un único componente configurable.

---

### 2.7 — `!important` usado en múltiples lugares

**Archivos:** `Quiz.astro` (líneas 141-148, 285), `PremiumGate.astro` (línea 363), `LandingLayout.astro` (línea 42), `barista-roadmap.astro` (línea 533)
**Problema:** Se usa `!important` en al menos 8 declaraciones para forzar estilos. Esto indica conflictos de especificidad que deberían resolverse con mejor arquitectura CSS.

**Impacto:** Bajo
**Solución:** Aumentar la especificidad de los selectores en lugar de usar `!important`, o usar `@layer` de CSS para controlar la cascada.

---

## 3. UX (Experiencia de Usuario)

### 3.1 — Navegación sin indicador de página activa en mobile

**Archivo:** `src/components/layout/Header.astro` (líneas 49-66)
**Problema:** El menú mobile muestra los items de navegación pero no indica visualmente cuál es la página activa. El prop `isActive` se pasa a `NavItem` pero el menú mobile no tiene diferenciación visual para el estado activo.

**Impacto:** Medio
**Solución:** Asegurar que `NavItem` aplique estilos de estado activo tanto en desktop como en mobile (verificar que el componente `NavItem` maneje `isActive` visualmente).

---

### 3.2 — Botón de paginación sin i18n: "Previous" / "Next" hardcoded en inglés

**Archivo:** `src/components/Pagination.astro` (líneas 19, 25)
**Problema:** Los textos "Previous" y "Next" están hardcoded en inglés, pero el sitio tiene contenido en español como idioma principal (`defaultLocale: 'es'`).

**Impacto:** Medio
**Solución:**
```astro
---
const isSpanish = !Astro.url.pathname.startsWith('/en/')
const prevLabel = isSpanish ? 'Anterior' : 'Previous'
const nextLabel = isSpanish ? 'Siguiente' : 'Next'
---
<!-- Usar {prevLabel} y {nextLabel} en los links -->
```

---

### 3.3 — Texto "Ahora" hardcoded en español en ProjectsList

**Archivo:** `src/components/ProjectsList.astro` (línea 50)
**Problema:** El texto "Ahora" (para proyectos sin fecha de fin) está hardcoded en español, pero el sitio tiene versión en inglés.

**Impacto:** Bajo
**Solución:** Recibir locale como prop o derivarlo de la URL para mostrar "Now" o "Ahora" según corresponda.

---

### 3.4 — Formulario de email sin feedback de loading

**Archivo:** `src/components/PremiumGate.astro` (líneas 411-428)
**Problema:** Al enviar el formulario de email (waitlist), no hay indicador de carga. El usuario puede hacer clic múltiples veces pensando que no funcionó. El botón no se deshabilita durante el envío.

**Impacto:** Medio
**Solución:**
```ts
emailForm?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const submitBtn = emailForm.querySelector('button[type="submit"]') as HTMLButtonElement
  if (submitBtn) {
    submitBtn.disabled = true
    submitBtn.textContent = '...'
  }
  // ... resto del código
  // En caso de error, restaurar el botón
})
```

---

### 3.5 — Quiz no accesible por teclado

**Archivo:** `src/components/Quiz.astro` (líneas 288-415)
**Problema:** Las opciones del quiz se crean dinámicamente como `<button>` (bien), pero:

1. No hay `aria-live` region para anunciar resultado/explicación a lectores de pantalla.
2. No hay `role="radiogroup"` en el contenedor de opciones.
3. La navegación con teclado entre opciones no usa arrow keys (patrón esperado para radiogroup).
4. El estado correcto/incorrecto no se comunica con `aria-label` o `aria-describedby`.

**Impacto:** Alto
**Solución:**
```ts
// Al crear el contenedor de opciones:
optionsEl.setAttribute('role', 'radiogroup')
optionsEl.setAttribute('aria-label', q.question)

// Al crear cada botón:
btn.setAttribute('role', 'radio')
btn.setAttribute('aria-checked', 'false')

// Al seleccionar:
btn.setAttribute('aria-checked', 'true')

// Al verificar respuesta:
explanationEl.setAttribute('aria-live', 'polite')

// Resultado:
resultEl.setAttribute('aria-live', 'assertive')
```

---

### 3.6 — Links de paginación deshabilitados siguen siendo clickeables

**Archivo:** `src/components/Pagination.astro` (líneas 15-17, 22-24)
**Problema:** Cuando no hay página previa/siguiente, el `<a>` se renderiza con `opacity-25` pero sigue siendo un enlace con `href={undefined}`. Esto permite que el usuario haga clic y navegue a la URL actual.

**Impacto:** Medio
**Solución:**
```astro
{page.url.prev ? (
  <a class="clickable" href={page.url.prev}>Anterior</a>
) : (
  <span class="opacity-25 cursor-default">Anterior</span>
)}
```

---

### 3.7 — Sin estado de error visible en formulario de licencia

**Archivo:** `src/components/PremiumGate.astro` (línea 466)
**Problema:** Cuando la validación de licencia falla, se restaura el texto del botón con `licenseBtn.dataset.originalText` pero el atributo se guarda *después* de los event listeners (línea 472). Si `originalText` es vacío, el botón queda sin texto.

**Impacto:** Bajo
**Solución:** Mover la línea de guardado del texto original antes de los event listeners, o usar un fallback:
```ts
licenseBtn.textContent = licenseBtn.dataset.originalText || (lang === 'en' ? 'Activate' : 'Activar')
```

---

### 3.8 — Menú mobile no se cierra al navegar

**Archivo:** `src/components/layout/MobileNavToggle.astro` (líneas 13-38)
**Problema:** Con View Transitions de Astro, al hacer clic en un link del menú mobile, la navegación ocurre pero el menú puede quedar abierto porque no hay listener que lo cierre al navegar.

**Impacto:** Medio
**Solución:**
```ts
document.addEventListener('astro:before-swap', () => {
  const nav = document.querySelector('#mobile-nav')
  const icon = document.querySelector('#mobile-nav-toggle')?.children[0]
  if (nav && !nav.classList.contains('hidden')) {
    nav.classList.add('hidden')
    icon?.classList.remove(iconOpen)
    icon?.classList.add(iconClosed)
  }
})
```

---

### 3.9 — `<time>` sin atributo `datetime`

**Archivos:** `src/components/PostsList.astro` (línea 39), `src/layouts/PostLayout.astro` (línea 37), `src/components/ProjectsList.astro` (líneas 48-49)
**Problema:** Los elementos `<time>` muestran la fecha formateada pero no incluyen el atributo `datetime` con formato ISO, necesario para SEO y accesibilidad.

**Impacto:** Medio
**Solución:**
```astro
<time datetime={post.data.publishedDate.toISOString()}>
  {toDateString(post.data.publishedDate)}
</time>
```

---

### 3.10 — Contenido premium ocultado solo con CSS (fácil de bypasear)

**Archivos:** `src/scripts/premium.ts` (líneas 70-80), `src/components/PremiumGate.astro`
**Problema:** El contenido premium se oculta con `style.display = 'none'`, `filter`, `maxHeight` y `overflow` en el client. Un usuario puede simplemente abrir DevTools y remover estos estilos para ver todo el contenido, ya que el HTML completo se envía al navegador.

**Impacto:** Alto (modelo de negocio)
**Solución:** El contenido premium no debe renderizarse en el HTML enviado al cliente. Implementar un middleware server-side o usar Astro server endpoints para servir contenido premium solo a usuarios autenticados. Alternativa mínima: truncar el markdown en build time y servir solo un preview.

---

## Resumen: Los 3 Problemas Más Críticos

| # | Problema | Dimensión | Impacto |
|---|----------|-----------|---------|
| 1 | **Contenido premium visible en HTML** (3.10 + 1.6): Todo el contenido de pago se envía al navegador y se oculta con CSS. La validación de licencia acepta cualquier UUID si el servidor no responde. Cualquier usuario puede acceder sin pagar. | Código + UX | **Crítico** |
| 2 | **Contraste insuficiente por abuso de opacity** (2.1 + 2.2): El uso de `opacity` como sistema de jerarquía crea docenas de combinaciones que no cumplen WCAG AA (4.5:1). Los textos secundarios/terciarios son ilegibles en modo oscuro para usuarios con dificultades visuales. | UI + UX | **Crítico** |
| 3 | **N+1 queries en tags** (1.3) + **rutas duplicadas** (1.5): `getTagUsage()` ejecuta 3 llamadas a `getCollection` por cada tag en el template, multiplicando el tiempo de build. Los archivos `[page].astro` duplicados pueden causar conflictos de rutas impredecibles. | Código | **Alto** |

---

## Puntuaciones

| Dimensión | Puntuación | Observaciones |
|-----------|:----------:|---------------|
| **Calidad de Código** | **7 / 10** | Buena estructura general con Astro, tipado TypeScript decente, separación de concerns clara. Penalizado por: `any` explícitos, performance de tags, rutas duplicadas, y validación de licencia insegura. |
| **Diseño UI** | **6 / 10** | Estética limpia y moderna, buen uso de color-mix y transiciones. Penalizado por: abuso de opacity, inconsistencia entre Tailwind y CSS custom, variables de color no unificadas, fuentes cargadas de forma mixta, y uso de `!important`. |
| **UX** | **6 / 10** | Buenos flujos generales (roadmap, quiz, lecciones con prev/next). Penalizado por: accesibilidad deficiente en quiz, i18n incompleto, falta de feedback de loading, paginación con links muertos, y contenido premium fácilmente bypasseable. |

---

## Lista de Mejoras Ordenadas por Prioridad

### Prioridad Alta

1. **Proteger contenido premium server-side** — No enviar HTML premium al navegador. Usar Astro server endpoints o middleware.
2. **Corregir validación de licencia** — No aceptar UUIDs por defecto si el servidor no responde.
3. **Reemplazar opacity por colores con contraste WCAG AA** — Definir variables `--text-primary`, `--text-secondary`, `--text-tertiary` con ratios verificados.
4. **Eliminar archivos de rutas duplicados** — Borrar `[page].astro` en posts, cafe y projects.
5. **Optimizar queries de tags** — Pre-computar usage en frontmatter, no en template.
6. **Hacer Quiz accesible** — Añadir roles ARIA, aria-live, soporte de teclado.

### Prioridad Media

7. **Añadir `datetime` a todos los `<time>`** — SEO y accesibilidad.
8. **Internacionalizar Pagination y ProjectsList** — "Previous"/"Next" y "Ahora"/"Now".
9. **Self-host Source Serif 4** — Instalar vía fontsource, eliminar Google Fonts CDN.
10. **Unificar sistema de variables CSS** — Definir `--color-accent` explícitamente.
11. **Añadir feedback de loading en formularios** — Deshabilitar botón durante envío.
12. **Cerrar menú mobile al navegar** — Listener en `astro:before-swap`.
13. **Añadir timeout al loader de Lemon Squeezy** — Evitar Promises que nunca resuelven.
14. **Actualizar description del sitio** — Reemplazar texto del template.
15. **Establecer convención Tailwind vs CSS scoped** — Documentar criterio.

### Prioridad Baja

16. **Tipar plugins de remark/shiki** — Eliminar `any` explícitos.
17. **No mutar props** — Copiar arrays antes de `.sort()`.
18. **Reemplazar `Function` por `ImageFunction`** — En content config.
19. **Hacer quizId determinista** — Hash basado en contenido.
20. **Unificar footer** — Reutilizar componente en landing page.
21. **Eliminar `!important`** — Resolver especificidad con mejor arquitectura CSS.

---

---

## ADDENDUM: Hallazgos Adicionales de UI/UX (Revisión Profunda)

### A. ACCESIBILIDAD — Problemas Críticos Adicionales

#### A.1 — ModeToggle sin `aria-label` ni `aria-pressed`

**Archivo:** `src/components/mode/ModeToggle.astro` (líneas 1-28)
**Problema:** El botón de cambio de tema (light/dark) es un Web Component con un `<button>` que no tiene `aria-label` ni `aria-pressed`. Un usuario de lector de pantalla no sabe qué hace el botón ni en qué estado está.

**Impacto:** Alto
**Solución:**
```ts
// Dentro del connectedCallback del Web Component:
const btn = this.querySelector('button')
btn?.setAttribute('aria-label', 'Cambiar tema')
btn?.setAttribute('aria-pressed', document.documentElement.dataset.mode === 'dark' ? 'true' : 'false')

// Al hacer toggle:
btn?.setAttribute('aria-pressed', String(newMode === 'dark'))
```

---

#### A.2 — MobileNavToggle sin `aria-expanded`

**Archivo:** `src/components/layout/MobileNavToggle.astro` (líneas 5-39)
**Problema:** El botón hamburguesa alterna el menú entre visible/oculto, pero no expone el estado con `aria-expanded`. El `title` dice "Mobile nav toggle" (en inglés, el sitio es en español).

**Impacto:** Alto
**Solución:**
```html
<button title="Menú de navegación" aria-expanded="false" aria-controls="mobile-nav">
```
```ts
// Al hacer toggle:
btn.setAttribute('aria-expanded', String(!isOpen))
```

---

#### A.3 — Íconos sociales sin `aria-label`

**Archivo:** `src/pages/index.astro` (líneas 44-56), `src/components/layout/FooterItem.astro`
**Problema:** Los links de redes sociales en el hero y el footer solo contienen un ícono SVG/CSS. Sin `aria-label`, un lector de pantalla lee la URL completa o nada.

**Impacto:** Alto
**Solución:**
```astro
<!-- FooterItem.astro -->
<a href={item.url} target="_blank" rel="noopener noreferrer"
   aria-label={item.label ?? item.url}
   class="clickable">
  <span class={item.icon} aria-hidden="true"></span>
</a>
```

---

#### A.4 — CopyCodeButtonsPlugin sin texto accesible

**Archivo:** `src/plugins/CopyCodeButtonsPlugin.astro` (líneas 5-24)
**Problema:** El botón de copiar código solo muestra un ícono (clase CSS). No hay `aria-label`, `title`, ni texto visible. Un usuario de teclado o lector de pantalla no puede saber qué hace.

**Impacto:** Medio
**Solución:**
```ts
btn.setAttribute('aria-label', 'Copiar código')
btn.setAttribute('title', 'Copiar código')
// Al copiar exitosamente:
btn.setAttribute('aria-label', '¡Copiado!')
```

---

#### A.5 — Focus indicators ausentes en toda la navegación

**Archivos:** `src/components/layout/NavItem.astro`, `src/components/TagsBar.astro`, `src/components/Pagination.astro`
**Problema:** Ninguno de estos componentes tiene `:focus-visible` definido. Un usuario que navega con Tab no tiene feedback visual de dónde está el foco.

**Impacto:** Alto
**Solución:** Añadir un estilo global en `main.css`:
```css
:focus-visible {
  outline: 2px solid rgb(var(--accent));
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

### B. DISEÑO RESPONSIVE — Gaps Adicionales

#### B.1 — Touch targets demasiado pequeños en TagsBar

**Archivo:** `src/components/TagsBar.astro` (líneas 11-24)
**Problema:** Los tags tienen `px-2 py-0.5` (~22px de alto). El mínimo recomendado por WCAG 2.5.5 (Target Size) y las guías de Material Design es 44×44px para elementos táctiles en mobile.

**Impacto:** Medio
**Solución:**
```astro
<a class="... px-3 py-2 sm:px-2 sm:py-0.5 min-h-[44px] sm:min-h-0 flex items-center ...">
```

---

#### B.2 — Diagramas SVG ilegibles en mobile

**Archivos:** `src/components/diagrams/FlavorWheel.astro` (líneas 66-228), `RoastCurve.astro`, `ExtractionChart.astro`
**Problema:** Los diagramas SVG usan `font-size: 10px-12px` para etiquetas. En un viewport de 375px, con el SVG escalado al 100% del ancho, estos textos quedan en ~5-6px efectivos, completamente ilegibles.

**Impacto:** Alto
**Solución:** Dos opciones:

1. Añadir una versión simplificada del diagrama para mobile con menos etiquetas y texto más grande.
2. Hacer los diagramas scrollables horizontalmente con un ancho mínimo:
```css
.diagram-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.diagram-wrapper svg {
  min-width: 500px;
}
```

---

#### B.3 — ScrollToTopPlugin con posicionamiento frágil

**Archivo:** `src/plugins/ScrollToTopPlugin.astro` (líneas 1-39)
**Problema:** El botón usa `bottom-20 sm:bottom-28 lg:bottom-8` — tres breakpoints con valores arbitrarios que no están alineados con ningún sistema de spacing. En ciertos tamaños de pantalla, el botón puede solaparse con el footer o el contenido.

**Impacto:** Bajo
**Solución:**
```css
/* Posicionamiento relativo al viewport, no a breakpoints arbitrarios */
.scroll-top {
  position: fixed;
  bottom: max(1rem, env(safe-area-inset-bottom) + 1rem);
  right: 1rem;
  z-index: 50;
}
```

---

### C. MICROINTERACCIONES Y FEEDBACK

#### C.1 — Cambio de tema sin transición (flash abrupto)

**Archivo:** `src/components/mode/ModeManager.astro` (líneas 7-45)
**Problema:** Al cambiar entre light y dark mode, todos los colores cambian instantáneamente. Esto crea un flash visual agresivo, especialmente de noche.

**Impacto:** Medio
**Solución:** Añadir transición global temporal solo durante el cambio:
```ts
// Al hacer toggle:
document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease'
document.documentElement.dataset.mode = newMode
setTimeout(() => {
  document.documentElement.style.transition = ''
}, 350)
```

---

#### C.2 — ScrollProgressPlugin sin suavizado

**Archivo:** `src/plugins/ScrollProgressPlugin.astro` (líneas 1-26)
**Problema:** La barra de progreso de lectura actualiza su `width` en cada evento `scroll` sin ningún suavizado. El resultado es un movimiento entrecortado, especialmente en mobile donde el scroll puede ser menos fluido.

**Impacto:** Bajo
**Solución:**
```css
.scroll-progress-bar {
  transition: width 0.1s ease-out;
  will-change: width;
}
```

---

#### C.3 — ScrollToTopPlugin aparece/desaparece sin transición

**Archivo:** `src/plugins/ScrollToTopPlugin.astro` (líneas 1-39)
**Problema:** El botón usa `classList.add('hidden')` / `classList.remove('hidden')` que cambia `display: none` instantáneamente. No hay fade-in/out.

**Impacto:** Bajo
**Solución:**
```css
.scroll-top-btn {
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
}
.scroll-top-btn.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```

---

#### C.4 — Menú mobile sin animación de apertura

**Archivo:** `src/components/layout/Header.astro` + `MobileNavToggle.astro`
**Problema:** El menú mobile se muestra/oculta con `classList.toggle('hidden')` — aparición y desaparición instantánea. No hay slide-down, fade, ni ninguna transición.

**Impacto:** Medio
**Solución:**
```css
#mobile-nav {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.2s ease;
  opacity: 0;
}
#mobile-nav.open {
  max-height: 300px;
  opacity: 1;
}
```

---

#### C.5 — Diagramas interactivos solo funcionan con mouse

**Archivos:** `FlavorWheel.astro`, `RoastCurve.astro`, `ExtractionChart.astro`, `EspressoAnatomy.astro`
**Problema:** Todos los diagramas usan `mouseenter`/`mouseleave` para tooltips e interactividad. En dispositivos táctiles no hay forma de activar estas interacciones.

**Impacto:** Alto
**Solución:**
```ts
// Añadir soporte touch:
element.addEventListener('touchstart', (e) => {
  e.preventDefault()
  showTooltip(e.touches[0])
}, { passive: false })

element.addEventListener('touchend', hideTooltip)

// O usar @media (hover: hover) para mostrar interacciones solo cuando hay mouse:
@media (hover: none) {
  .diagram-tooltip { display: none; }
  .diagram-labels { opacity: 1; } /* Mostrar siempre en touch */
}
```

---

### D. ESTADOS FALTANTES

#### D.1 — ProjectsList sin empty state

**Archivo:** `src/components/ProjectsList.astro`
**Problema:** Si el array de proyectos está vacío, el componente renderiza un contenedor vacío sin ningún mensaje.

**Impacto:** Bajo
**Solución:**
```astro
{projects.length === 0 && (
  <p class="text-sm opacity-40 py-8 text-center">No hay proyectos todavía.</p>
)}
```

---

#### D.2 — Imágenes sin estado de error

**Archivos:** `src/pages/index.astro` (línea 23), `Hero.astro`
**Problema:** Si la imagen de perfil o el logo fallan al cargar, no hay fallback visual. El espacio queda vacío o roto.

**Impacto:** Bajo
**Solución:**
```html
<img src="..." alt="David San Luis"
  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
/>
<div style="display:none" class="w-28 h-28 rounded-full bg-accent/10 items-center justify-center text-2xl">
  DS
</div>
```

---

#### D.3 — Quiz sin feedback para respuesta parcial

**Archivo:** `src/components/Quiz.astro`
**Problema:** Si el usuario cierra la página o navega a mitad de un quiz, al volver no hay memoria de su progreso. No se usa `localStorage` ni `sessionStorage`.

**Impacto:** Medio
**Solución:** Guardar el progreso del quiz en `sessionStorage` (se borra al cerrar pestaña):
```ts
const storageKey = `quiz-progress-${quizId}`
// Al responder:
sessionStorage.setItem(storageKey, JSON.stringify({ currentIndex, score, answers }))
// Al cargar:
const saved = sessionStorage.getItem(storageKey)
if (saved) { /* restaurar estado */ }
```

---

### E. TIPOGRAFÍA Y LEGIBILIDAD

#### E.1 — Longitud de línea sin control en PageLayout

**Archivo:** `src/layouts/PageLayout.astro` (líneas 29-42)
**Problema:** El componente `Prose` limita el ancho, pero en `PageLayout` el contenido no tiene `max-width` propio. En pantallas anchas, las líneas de texto pueden superar los 80-90 caracteres recomendados para legibilidad.

**Impacto:** Medio
**Solución:**
```css
.page-content {
  max-width: 65ch; /* Optimal: 50-75 characters per line */
}
```

---

#### E.2 — Scrollbar solo estilizada en WebKit

**Archivo:** `src/style/main.css` (líneas 17-31)
**Problema:** Los estilos de scrollbar usan `::-webkit-scrollbar` que solo funciona en Chrome/Safari/Edge. Firefox muestra la scrollbar por defecto del sistema, creando una inconsistencia visual.

**Impacto:** Bajo
**Solución:** Añadir soporte Firefox:
```css
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--accent), 0.15) transparent;
}
```

---

#### E.3 — `color-mix()` sin fallback para navegadores viejos

**Archivos:** Prácticamente todo el CSS custom del proyecto
**Problema:** `color-mix(in srgb, ...)` se usa extensivamente pero no tiene fallback. En Safari < 16.2, Firefox < 113, y Chrome < 111, todos estos colores fallan silenciosamente.

**Impacto:** Medio (según analytics del sitio)
**Solución:** Añadir fallbacks con `rgba()`:
```css
.element {
  background: rgba(var(--accent), 0.08); /* fallback */
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
}
```

---

### Puntuaciones Actualizadas (Post-Revisión Profunda)

| Dimensión | Puntuación Anterior | Puntuación Revisada | Delta |
|-----------|:-------------------:|:-------------------:|:-----:|
| **Calidad de Código** | 7 / 10 | 7 / 10 | — |
| **Diseño UI** | 6 / 10 | 5.5 / 10 | -0.5 |
| **UX** | 6 / 10 | 5 / 10 | -1.0 |

**Justificación del ajuste:**
La revisión profunda reveló problemas estructurales de accesibilidad (focus indicators ausentes globalmente, ARIA faltante en navegación y componentes interactivos) y gaps significativos en mobile (touch targets, diagramas ilegibles, interacciones solo-mouse). Estos problemas afectan a una porción importante de usuarios.

---

### Mejoras Adicionales Ordenadas por Prioridad

#### Prioridad Alta
1. **Focus indicators globales** — Añadir `:focus-visible` en `main.css` para toda interacción de teclado.
2. **ARIA en ModeToggle y MobileNavToggle** — `aria-label`, `aria-pressed`, `aria-expanded`.
3. **ARIA labels en íconos sociales** — Tanto en hero como en footer.
4. **Diagramas accesibles en touch** — Añadir soporte táctil o mostrar datos siempre en mobile.
5. **Diagramas legibles en mobile** — Scroll horizontal o versión simplificada.

#### Prioridad Media
6. **Transición de tema suave** — Evitar flash abrupto al cambiar light/dark.
7. **Animación de menú mobile** — Slide/fade en vez de show/hide instantáneo.
8. **Touch targets de 44px** — TagsBar, FooterItem, CopyCodeButton.
9. **Fallbacks de `color-mix()`** — Para navegadores más antiguos.
10. **Longitud de línea controlada** — `max-width: 65ch` en PageLayout.
11. **Quiz: persistencia de progreso** — `sessionStorage` para no perder avance.
12. **CopyCodeButton accesible** — `aria-label` y `title`.

#### Prioridad Baja
13. **ScrollToTop con fade** — Transición en vez de hidden/visible.
14. **ScrollProgress con suavizado** — `transition: width 0.1s`.
15. **Scrollbar Firefox** — `scrollbar-width: thin`.
16. **Empty state en ProjectsList** — Mensaje cuando no hay proyectos.
17. **Fallback de imagen de perfil** — Iniciales como placeholder.

---

*Addendum generado el 6 de marzo de 2026.*
