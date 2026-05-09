# David San Luis Aguirre

**Desarrollador Fullstack | TypeScript · Angular · NestJS · Next.js · Scala 3**

david_sanluis@outlook.com · davidsanluisaguirre.com · github.com/Davidsmait · linkedin.com/in/davidsanluisaguirre · Pachuca, México · Disponible para remoto

---

## Resumen profesional

Desarrollador fullstack con 3 años 4 meses construyendo software web y móvil en producción. Stack principal TypeScript con Angular, NestJS y Prisma/PostgreSQL, complementado con Next.js, Supabase, Scala 3 (Akka HTTP) y Ionic/Capacitor.

He liderado dos productos end-to-end en QRSof: **Slird** (ecosistema completo de 4 repos — backend Scala, app móvil con NFC, landing pública en [slird.com](https://www.slird.com/) y web viewer NFC — ~614 commits propios, todos como #1 contributor; producto release-ready, mantenido como activo interno por decisión de negocio, solo la landing está liberada) y **CEN** (iniciador y contributor principal con ~70% del código, +100 builds firmados en producción en App Store y Google Play, +300 empleados activos). Actualmente en **Grace AI** soy top contributor del frontend Angular (++600 commits) y desarrollo activamente en el backend NestJS (controllers, DTOs, módulos en admin/core) y en la capa de services con Prisma/PostgreSQL.

En paralelo construyo **La Commune** — un sistema POS + loyalty para cafeterías de especialidad con Next.js + Supabase — combinando desarrollo asistido por IA (Claude Code) con auditoría manual exhaustiva, testing y decisiones de arquitectura.

---

## Experiencia profesional

### QRSof — Empresa de Desarrollo de Software

**Desarrollador Fullstack** · Febrero 2023 – Presente · Hidalgo, México (Remoto)

#### Grace AI — Plataforma SaaS LegalTech *(actual, mar 2025 – presente)*

- **Top contributor del frontend Angular** (++600 commits) en una arquitectura monorepo multi-aplicación: frontend cliente, panel admin y librería compartida de componentes (`grace-lib`).
- **Desarrollo backend NestJS:** ++165 archivos en módulos `admin/` y `core/` — diseño e implementación de controllers REST, DTOs con validación y estructura de módulos.
- **Capa de services con Prisma/PostgreSQL:** ++200 commits implementando services TypeScript de lógica de negocio (FormService, ModalityService, etc.) consumidos transversalmente por la API.
- Plataforma SaaS multi-tenant con autenticación Keycloak (JWT) y procesamiento de documentos con LLMs.
- Trabajo cross-funcional con equipos de backend avanzado, infraestructura (AWS), workflows Python (IA/ML) y producto.

*Tech: Angular, TypeScript, RxJS, NgRx, Tailwind CSS, NestJS, Prisma, PostgreSQL, Keycloak (JWT), APIs LLM, Swagger, Confluence, Jira.*

#### CEN — App Móvil ERP Cross-Platform *(mar 2024 – presente)*

- **Iniciador y contributor principal del proyecto** (~70% del código, 277 commits de 395 totales).
- Diseño e implementación end-to-end de **7 módulos de negocio**: despachos (incluyendo despacho-libre y despacho-rework), incidencias, encuestas, kiosko, operaciones y quiniela (este último implementado solo en mar 2026).
- **Arquitectura offline-first** con TypeORM sobre SQLite cifrada con SQLCipher, NgRx con Effects custom (DatabaseEffect, SurveyEffect, ResponsesEffect) y servicio custom de sincronización con backend.
- **Release management completo:** +100 builds firmados (versionCode 102) en iOS App Store y Google Play, manejando versionado coordinado entre plataformas y migración a Android SDK 35 + soporte 16 KB page size.
- Integración de **10 plugins Capacitor**: cámara, escáner de códigos de barras, geolocalización con permisos, detección de red para sync offline, preferences, haptics, etc.
- Autenticación JWT con `@auth0/angular-jwt`, route guards e HTTP interceptor para refresh de tokens.
- CI/CD en GitLab con cache de dependencias.

*Tech: Angular 17, Ionic 8, Capacitor 6, TypeScript, NgRx, TypeORM, SQLite, SQLCipher, JWT, GitLab CI, iOS, Android nativo (Gradle, Xcode, Podfile), 10+ Capacitor plugins.*

#### Slird — Plataforma de Networking Profesional con NFC *(mar 2023 – nov 2024)*

- **Lead developer end-to-end del ecosistema completo** — 4 repos, ~614 commits propios, #1 contributor en todos. El producto se construyó a nivel release-ready; por decisión de negocio se mantiene como activo interno de QRSof. Solo la landing pública en slird.com está liberada al público.
- **Backend Scala 3 multi-módulo con Clean Architecture** (~98% del repo, 210/214 commits) — 5 módulos (api, business, data, ws, app) con Akka HTTP + Akka Streams + akka-actor-typed, Slick sobre PostgreSQL, JWT con nimbus-jose, Firebase Admin SDK para push notifications, Swagger para documentación. **Migración Scala 2.13 → Scala 3.7.** Backend contenedorizado (Docker, base `amazoncorretto:21-alpine`) e integrado al pipeline de despliegue a AWS ECR (us-west-2).
- **App móvil Angular 17 + Ionic 7 + Capacitor 6** (~95% del repo, 310/326 commits) construida y firmada para iOS y Android, con integración NFC custom, Apple Sign In, Google Auth, Push Notifications y Firebase Dynamic Links. **7 componentes reusables que redujeron 70% el tiempo de desarrollo frontend.**
- **Landing pública en [slird.com](https://www.slird.com/)** (~85% del repo) construida con Vite + React 18 + TypeScript + Tailwind CSS + Swiper.
- **Web viewer de tarjetas vía NFC** (~85% del repo) — sitio que abre en el navegador del prospecto cuando se acerca a la tarjeta NFC, sin requerir instalar la app. Build con Gulp + HTML/CSS/JS.

*Tech: Angular 17, Ionic 7, Capacitor 6, NFC, TypeScript, Vite, React 18, Tailwind CSS, Scala 3, Akka HTTP, Akka Streams, Slick, PostgreSQL, JWT (nimbus), Firebase Admin, AWS ECR, Docker, GitLab CI, ScalaTest, SonarQube.*

#### Software Developer Intern *(feb 2023 – ago 2023)*

- Aprendizaje de Angular y TypeScript mediante proyectos internos, contribuyendo a bases de código internas y aplicaciones de prueba de concepto.
- Colaboración con desarrolladores senior en code reviews, mejores prácticas y flujos de trabajo ágiles.

---

## Proyectos personales

### La Commune — Sistema POS + Loyalty para Café de Especialidad
*lacommune.netlify.app · en producción · 2026*

- Sistema completo POS + app de fidelidad para cafeterías de especialidad. PWA para clientes con tarjetas digitales y push notifications, y POS con 11 módulos para baristas (gestión de mesas, KDS, cobros con split, reportes, cortes de turno).
- Combinación de desarrollo asistido por IA (Claude Code) con auditoría manual exhaustiva: 97 políticas RLS sobre 29 tablas, hashing bcrypt para PINs, separación estricta de ambientes dev/prod.
- Sistema de Web Push notifications integrado con triggers PostgreSQL + Edge Functions de Supabase.
- CI/CD con GitHub Actions: 84 tests unitarios + 61 E2E con Playwright. Deploys automáticos a Netlify.
- Arquitectura realtime entre POS y app cliente, design system con 5 temas, costo mensual de infra: $0.

*Tech: Next.js 14 (App Router), Supabase (PostgreSQL, Auth, RLS, Edge Functions, Realtime), TypeScript, Tailwind CSS, Zustand, Playwright, Vitest, Web Push, GitHub Actions, Netlify.*

### Blog técnico y Roadmap Barista de Especialidad
*davidsanluisaguirre.com · 2024 – presente*

- Blog personal y plataforma educativa bilingüe (ES/EN) construida con Astro + MDX + Tailwind. Schema.org Course en cada lección, sistema de cookies para tracking de progreso, hreflang dinámico para paridad ES/EN.
- Currículo abierto y gratuito de café de especialidad: 9 fases planeadas, 3 publicadas (14 lecciones) basadas en SCA, Scott Rao y Jonathan Gagné.
- Quizzes interactivos, 5 diagramas SVG componibles, entrada propia en Wikidata (Q138853693).

*Tech: Astro 5, MDX, Tailwind CSS, TypeScript, Schema.org, Netlify.*

---

## Educación

**Instituto Tecnológico de Pachuca** · Ingeniería en Sistemas Computacionales · 2017 – 2021
*Estudios concluidos sin titulación · Formación complementada con experiencia profesional y aprendizaje autodidacta continuo.*

---

## Habilidades técnicas

| | |
|---|---|
| **Lenguajes** | TypeScript, JavaScript, Scala, HTML, CSS |
| **Frontend** | Angular, RxJS, NgRx, Next.js, React, Ionic, Capacitor, Tailwind CSS, Astro |
| **Backend** | NestJS, Node.js, Scala 3 (Akka HTTP, Akka Streams, akka-actor-typed), Slick, Play Framework, REST APIs, Swagger |
| **Cloud y datos** | AWS ECR + Docker (Slird), Supabase (PostgreSQL, Auth, RLS, Edge Functions, Realtime), Prisma, PostgreSQL, SQLite, Firebase, Keycloak (JWT) |
| **Móvil** | Ionic + Capacitor (iOS + Android), TypeORM + SQLite (offline-first), SQLCipher, NFC, App Store Connect, Google Play Console, release management |
| **IA y desarrollo asistido** | Claude Code, integración de APIs LLM, OCR aplicado, flujos de desarrollo asistido por IA con auditoría manual |
| **Testing y CI/CD** | Playwright, Vitest, GitHub Actions, Netlify deploys |
| **Herramientas** | Git, Jira, Confluence, Cursor, Bruno, Xcode, Android Studio, DBeaver, IntelliJ IDEA |
| **Arquitectura** | Multi-tenant SaaS, offline-first, PWA, Clean Architecture, MVC, monorepos multi-app |
| **Metodologías** | Scrum, Agile, code review, pair programming |

---

## Idiomas

- **Español:** nativo
- **Inglés:** Lectura y escucha técnica B2 · conversación intermedia (B1) · en mejora activa

---

## Enlaces

- Blog técnico: davidsanluisaguirre.com
- GitHub: github.com/Davidsmait *(56+ repositorios públicos)*
- LinkedIn: linkedin.com/in/davidsanluisaguirre
- La Commune en producción: lacommune.netlify.app
- CEN en Google Play: play.google.com/store/apps/details?id=com.qrsof.cen
