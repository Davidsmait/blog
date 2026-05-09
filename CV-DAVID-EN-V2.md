# David San Luis Aguirre

**Fullstack Developer | TypeScript · Angular · NestJS · Next.js · Scala 3**

david_sanluis@outlook.com · davidsanluisaguirre.com · github.com/Davidsmait · linkedin.com/in/davidsanluisaguirre · Pachuca, Mexico · Available for remote

---

## Professional summary

Fullstack developer with 3 years 4 months building production web and mobile software. Primary stack TypeScript with Angular, NestJS and Prisma/PostgreSQL, complemented with Next.js, Supabase, Scala 3 (Akka HTTP) and Ionic/Capacitor.

At QRSof I've led two products end-to-end: **Slird** (full 4-repo ecosystem — Scala backend, NFC mobile app, public landing at [slird.com](https://www.slird.com/), and NFC web viewer — ~614 personal commits, #1 contributor on all repos; product built to release-ready level, kept as internal asset by business decision, only the landing is live) and **CEN** (project initiator and lead contributor with ~70% of the code, 100+ signed builds in production on App Store and Google Play, 300+ active employees). Currently at **Grace AI** I'm top contributor on the Angular frontend (600+ commits) and active on the NestJS backend (controllers, DTOs, modules in admin/core) and the Prisma/PostgreSQL services layer.

Alongside, I'm building **La Commune** — a POS + loyalty system for specialty coffee shops with Next.js + Supabase — combining AI-assisted development (Claude Code) with thorough manual auditing, testing and architecture decisions.

---

## Professional experience

### QRSof — Software Development Company

**Fullstack Developer** · February 2023 – Present · Hidalgo, Mexico (Remote)

#### Grace AI — LegalTech SaaS Platform *(current, Mar 2025 – Present)*

- **Top contributor on the Angular frontend** (600+ commits) across a multi-app monorepo: client frontend, admin panel and a shared component library (`grace-lib`).
- **NestJS backend development:** 165+ files across `admin/` and `core/` modules — designed and implemented REST controllers, validated DTOs and module structure.
- **Prisma/PostgreSQL services layer:** 200+ commits building TypeScript business-logic services (FormService, ModalityService, etc.) consumed across the API.
- Multi-tenant SaaS with Keycloak authentication (JWT) and LLM-driven document processing.
- Cross-functional work with advanced backend, infrastructure (AWS), Python AI/ML workflow and product teams.

*Tech: Angular, TypeScript, RxJS, NgRx, Tailwind CSS, NestJS, Prisma, PostgreSQL, Keycloak (JWT), LLM APIs, Swagger, Confluence, Jira.*

#### CEN — Cross-Platform ERP Mobile App *(Mar 2024 – Present)*

- **Project initiator and lead contributor** (~70% of the code, 277 of 395 total commits).
- Designed and implemented end-to-end **7 complete business modules**: dispatches (including despacho-libre and despacho-rework), incidents, surveys, kiosk mode, operations, and quiniela (last one shipped solo in Mar 2026).
- **Offline-first architecture** with TypeORM over SQLite encrypted with SQLCipher, NgRx state management with custom Effects (DatabaseEffect, SurveyEffect, ResponsesEffect), and a custom backend sync service.
- **Full release management:** 100+ signed builds shipped to iOS App Store and Google Play (versionCode 102), handling coordinated versioning across platforms and migration to Android SDK 35 + 16 KB page size support.
- Integrated **10+ Capacitor plugins**: camera, barcode scanner, geolocation with permissions, network detection for offline sync, preferences, haptics, etc.
- JWT authentication with `@auth0/angular-jwt`, route guards and HTTP interceptor for token refresh.
- CI/CD in GitLab with dependency caching.

*Tech: Angular 17, Ionic 8, Capacitor 6, TypeScript, NgRx, TypeORM, SQLite, SQLCipher, JWT, GitLab CI, iOS, Android native (Gradle, Xcode, Podfile), 10+ Capacitor plugins.*

#### Slird — NFC Professional Networking Platform *(Mar 2023 – Nov 2024)*

- **End-to-end lead developer of the entire ecosystem** — 4 repos, ~614 personal commits, #1 contributor on all of them. The product was built to release-ready level; by business decision, it remains an internal QRSof asset. Only the public landing at slird.com is live.
- **Multi-module Scala 3 backend with Clean Architecture** (~98% of the repo, 210/214 commits) — 5 modules (api, business, data, ws, app) using Akka HTTP + Akka Streams + akka-actor-typed, Slick over PostgreSQL, JWT (nimbus-jose), Firebase Admin SDK for push notifications, Swagger documentation. **Migrated codebase from Scala 2.13 to Scala 3.7.** Backend containerized (Docker, base `amazoncorretto:21-alpine`) integrated into the deployment pipeline to AWS ECR (us-west-2).
- **Angular 17 + Ionic 7 + Capacitor 6 mobile app** (~95% of the repo, 310/326 commits) built and signed for iOS and Android, with custom NFC integration, Apple Sign In, Google Auth, Push Notifications, and Firebase Dynamic Links. **7 reusable components that reduced frontend development time by 70%.**
- **Public marketing landing at [slird.com](https://www.slird.com/)** (~85% of the repo) built with Vite + React 18 + TypeScript + Tailwind CSS + Swiper.
- **NFC web card viewer** (~85% of the repo) — website that opens in the prospect's browser when they tap the NFC card, no app install required. Built with Gulp + HTML/CSS/JS.

*Tech: Angular 17, Ionic 7, Capacitor 6, NFC, TypeScript, Vite, React 18, Tailwind CSS, Scala 3, Akka HTTP, Akka Streams, Slick, PostgreSQL, JWT (nimbus), Firebase Admin, AWS ECR, Docker, GitLab CI, ScalaTest, SonarQube.*

#### Software Developer Intern *(Feb 2023 – Aug 2023)*

- Ramped up on Angular and TypeScript through internal projects, contributing to internal codebases and proof-of-concept applications.
- Collaborated with senior developers on code reviews, best practices and agile workflows.

---

## Personal projects

### La Commune — POS + Loyalty System for Specialty Coffee
*lacommune.netlify.app · in production · 2026*

- Complete POS + loyalty app system for specialty coffee shops. Customer-facing PWA with digital stamp cards and push notifications, and a POS with 11 modules for baristas (table management, KDS, split-payment checkout, reports, shift close-outs).
- Combined AI-assisted development (Claude Code) with thorough manual auditing: 97 RLS policies across 29 tables, bcrypt-hashed PINs, strict dev/prod environment separation.
- Web Push notification system integrated with PostgreSQL triggers + Supabase Edge Functions.
- CI/CD with GitHub Actions: 84 unit tests + 61 E2E tests with Playwright. Automated deploys to Netlify.
- Realtime architecture between the POS and customer app, design system with 5 switchable themes, monthly infrastructure cost: $0.

*Tech: Next.js 14 (App Router), Supabase (PostgreSQL, Auth, RLS, Edge Functions, Realtime), TypeScript, Tailwind CSS, Zustand, Playwright, Vitest, Web Push, GitHub Actions, Netlify.*

### Technical blog and Specialty Coffee Barista Roadmap
*davidsanluisaguirre.com · 2024 – Present*

- Personal technical blog and bilingual (ES/EN) educational platform built with Astro + MDX + Tailwind. Schema.org Course on every lesson, cookie-based progress tracking, dynamic hreflang for ES/EN parity.
- Open and free curriculum on specialty coffee: 9 phases planned, 3 published (14 lessons) based on SCA, Scott Rao and Jonathan Gagné.
- Interactive quizzes, 5 composable SVG diagrams, own Wikidata entry (Q138853693).

*Tech: Astro 5, MDX, Tailwind CSS, TypeScript, Schema.org, Netlify.*

---

## Education

**Instituto Tecnológico de Pachuca** · Computer Systems Engineering · 2017 – 2021
*Coursework completed without formal degree · Formation complemented with professional experience and continuous self-directed learning.*

---

## Technical skills

| | |
|---|---|
| **Languages** | TypeScript, JavaScript, Scala, HTML, CSS |
| **Frontend** | Angular, RxJS, NgRx, Next.js, React, Ionic, Capacitor, Tailwind CSS, Astro |
| **Backend** | NestJS, Node.js, Scala 3 (Akka HTTP, Akka Streams, akka-actor-typed), Slick, Play Framework, REST APIs, Swagger |
| **Cloud & data** | AWS ECR + Docker (Slird), Supabase (PostgreSQL, Auth, RLS, Edge Functions, Realtime), Prisma, PostgreSQL, SQLite, Firebase, Keycloak (JWT) |
| **Mobile** | Ionic + Capacitor (iOS + Android), TypeORM + SQLite (offline-first), SQLCipher, NFC, App Store Connect, Google Play Console, release management |
| **AI-assisted development** | Claude Code, LLM API integration, applied OCR, AI-assisted dev workflows with manual auditing |
| **Testing & CI/CD** | Playwright, Vitest, GitHub Actions, Netlify deploys |
| **Tools** | Git, Jira, Confluence, Cursor, Bruno, Xcode, Android Studio, DBeaver, IntelliJ IDEA |
| **Architecture** | Multi-tenant SaaS, offline-first, PWA, Clean Architecture, MVC, multi-app monorepos |
| **Methodologies** | Scrum, Agile, code review, pair programming |

---

## Languages

- **Spanish:** native
- **English:** Technical reading & listening B2 · conversational intermediate (B1) · actively improving

---

## Links

- Technical blog: davidsanluisaguirre.com
- GitHub: github.com/Davidsmait *(56+ public repositories)*
- LinkedIn: linkedin.com/in/davidsanluisaguirre
- La Commune (live): lacommune.netlify.app
- CEN on Google Play: play.google.com/store/apps/details?id=com.qrsof.cen
