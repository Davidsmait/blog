---
title: "La Commune: la app de fidelidad que construí para una cafetería que todavía no existe"
description: "Cómo construí una PWA completa con sistema de lealtad, menú digital y panel de admin para mi futura cafetería de especialidad — usando Next.js, Supabase y Claude Code."
publishedDate: 2026-03-05
tags:
  - pwa
  - nextjs
  - claude-code
  - ia
  - desarrollo
---

## El contexto

Estoy preparando todo para abrir una cafetería de especialidad. La Commune es el nombre del proyecto, y la app de fidelidad fue lo primero que construí.

A mí me gustaría tener tarjetas físicas de sellos, pero eso todavía no es lo mío. Así que me enfoqué en lo que sí sé hacer: una PWA que vive en el celular del cliente, se instala como app nativa, y funciona aunque se caiga el internet.

Está desplegada en [lacommune.netlify.app](https://lacommune.netlify.app/).

## Qué hace

### Para los clientes

- Tarjeta de lealtad digital con sellos visuales y código QR único
- Menú del café dinámico con precios y disponibilidad
- Promociones activas con filtros por día
- Recuperación de tarjeta con número de teléfono
- Funciona offline — la tarjeta se ve sin internet

### Para el barista

- Panel de admin protegido con PIN (verificación HMAC-SHA256)
- Escáner QR para agregar sellos
- Gestión de menú — secciones, productos, toggle de disponibilidad
- Dashboard de analíticas con gráficas (Recharts)
- Directorio de clientes con historial
- Roles: admin, barista, camarero — cada uno ve lo que necesita

## Stack

El proyecto empezó con Firebase, pero a mitad de camino migré todo a **Supabase**. La razón: necesitaba compartir tablas con el POS que estoy construyendo por separado, y Supabase me da PostgreSQL real, RLS, funciones SQL y realtime.

La migración fue completa — eliminé toda dependencia de Firebase. Cero imports, cero config, cero archivos muertos.

Stack actual:

- **Next.js** con App Router
- **Supabase** (auth, base de datos, funciones PostgreSQL)
- **TypeScript** en todo el proyecto
- **Tailwind CSS** para estilos
- **Netlify** para deploy (costo: $0)

## La parte PWA

Lo más interesante del proyecto. La app se instala como nativa y tiene soporte offline real.

### Service Worker

El `sw.js` usa múltiples estrategias de cache: cache-first para assets estáticos, stale-while-revalidate para la tarjeta, y exclusiones para videos y peticiones de Supabase. Cada deploy genera un nuevo `BUILD_ID` que invalida el cache.

### Cola offline para sellos

Cuando un barista agrega un sello sin conexión:

1. Se guarda en `localStorage` con timestamp
2. Se registra un evento de Background Sync
3. Al recuperar conexión, sincroniza automáticamente
4. Hace broadcast a todas las pestañas abiertas para actualizar la UI

Suena simple, pero coordinar Background Sync, cache invalidation y broadcast entre pestañas tiene muchos edge cases.

### Experiencia nativa

Modo standalone (sin barra del navegador), iconos para home screen, shortcuts directos a "Mi tarjeta" y "Menú", y una página offline con el branding del café.

## Claude Code como copiloto

Claude Code fue mi herramienta principal durante todo el desarrollo. No es generar código y pegarlo — es un flujo de trabajo real donde el contexto lo es todo.

El proyecto tiene un `CLAUDE.md` que documenta la estructura, el esquema de la base de datos, las convenciones, las decisiones de arquitectura y el estado de cada módulo. Eso permite que Claude entienda el proyecto completo y sugiera cambios coherentes.

Donde más ayudó:

- **Service Worker** — debuggear estrategias de cache con múltiples exclusiones es difícil. Tener un copiloto que entiende el contexto completo acelera mucho.
- **Seguridad** — PIN con HMAC-SHA256, timing-safe comparison, rate limiting por IP. Cosas que quieres hacer bien desde el inicio.
- **Migración Firebase → Supabase** — reescribir todos los servicios, auth, funciones PostgreSQL. Claude ayudó a no dejar rastros de Firebase en el código.

El flujo es: describir qué necesito, Claude lee los archivos, implementa, ejecuta build/tests, itera si algo falla. Sigo revisando todo y guiando la dirección, pero la velocidad de iteración es otra.

## Tests

No es un demo — tiene tests reales:

- **25 tests unitarios** (Vitest) — servicios de tarjeta, menú, auth
- **50 tests E2E** (Playwright) — landing, onboarding, admin PIN, tarjeta, menú

## Lo que aprendí

1. **PWA sigue siendo viable en 2026** — para negocios locales que no quieren publicar en app stores, una PWA bien hecha ofrece experiencia nativa sin fricción de descarga.

2. **Construir para tu propio negocio te enseña diferente** — no es lo mismo resolver un ejercicio que preguntarte "¿qué pasa si el WiFi se cae cuando el barista está agregando un sello?". Los problemas reales no aparecen en tutoriales.

3. **El contexto es todo con IA** — un `CLAUDE.md` bien mantenido marca la diferencia entre sugerencias genéricas y cambios que encajan en tu arquitectura.

4. **Migrar a mitad de proyecto no es el fin del mundo** — Firebase a Supabase fue un cambio grande, pero valió la pena. A veces la mejor decisión es cambiar de dirección cuando encuentras algo que se ajusta mejor.

5. **Nunca está terminada** — sigo buscando formas de romperla, encontrar fallas y mejorarla. El filósofo Daniel Dennett hablaba del *steel man* — lo contrario del *straw man*: en vez de atacar la versión débil de un argumento, enfrentas la más fuerte. Así trato a la app y en general a mi vida: buscar el problema más difícil, no el más fácil. Cada falla que encuentro antes de abrir es un problema menos el día que importe de verdad.

---

*La cafetería todavía no abre, pero cuando lo haga, el día uno ya va a tener sistema de fidelidad.*
