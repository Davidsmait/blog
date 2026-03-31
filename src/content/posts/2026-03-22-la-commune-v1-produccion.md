---
title: "La Commune v1: todo lo que pasó entre 'funciona en local' y 'funciona de verdad'"
description: "La historia de llevar un sistema completo — app de fidelidad + punto de venta — de prototipo a producción real. Migración de base de datos, auditoría de seguridad, push notifications y las decisiones que importaron."
publishedDate: 2026-03-22
tags:
  - nextjs
  - supabase
  - produccion
  - pwa
  - claude-code
  - ia
  - desarrollo
---

## El post anterior terminaba así

*"La cafetería todavía no abre, pero cuando lo haga, el día uno ya va a tener sistema de fidelidad."*

Eso fue el 5 de marzo. Hoy, 17 días después, el sistema está en producción. No solo la app de fidelidad — también un punto de venta completo con 11 módulos, auditoría de seguridad, push notifications y CI/CD automatizado.

Este post no es un tutorial. Es la historia de lo que pasó entre "esto funciona en desarrollo" y "esto funciona de verdad".

## Lo que cambió desde el primer post

El 5 de marzo tenía una PWA de fidelidad conectada a Supabase. Hoy tengo dos sistemas en producción:

**La app de fidelidad** (la del post anterior) ahora tiene tarjetas con endowed progress effect, push notifications reales, ilustraciones seleccionables por recompensa, y un landing que se adapta según si el cliente ya tiene tarjeta o no.

**El POS** es nuevo. 11 módulos: dashboard con KPIs en tiempo real, gestión de mesas con drag & drop, menú con CRUD completo, órdenes con folio automático, cocina (KDS) con notificaciones sonoras, cobros con split de pagos, reportes con gráficas, usuarios con roles y PIN, fidelidad integrada, caja con corte de turno, y un design system con 5 temas switcheables.

Todo comparte la misma base de datos. Cuando el barista agrega un sello desde el POS, el cliente lo ve en su teléfono en tiempo real.

## Las 3 decisiones que más importaron

### 1. Migrar PINs a bcrypt

El sistema de autenticación del POS usa PINs numéricos de 4 dígitos — más práctico para un barista con las manos mojadas que escribir un email y contraseña.

En la primera versión, los PINs se guardaban en texto plano. Funcionaba, pero no era algo que quisiera en producción. La migración fue: agregar columna `pin_hash`, hashear todos los PINs existentes con bcrypt, actualizar la función `login_por_pin()` para usar `crypt()` en vez de comparación directa, y después eliminar la columna de texto plano.

El password de autenticación real es un HMAC-SHA256 determinístico: `HMAC(auth_uid, secret)`. El PIN solo sirve para localizar al usuario y verificar el hash — nunca viaja como contraseña real.

### 2. Tomarse en serio las RLS policies

Row Level Security en Supabase es una de esas cosas que puedes ignorar en desarrollo y te explota en producción. Terminé con 97 políticas RLS cubriendo 29 tablas.

Algunos descubrimientos en el camino: una vista SQL que bypasseaba RLS porque no tenía `security_invoker = true`. Tres políticas duplicadas que daban acceso anon a tablas que solo deberían ser accesibles por usuarios autenticados. Una función que podía ser víctima de schema injection porque no tenía `SET search_path = public`.

Nada de esto aparece en un tutorial de "cómo empezar con Supabase". Aparece cuando le haces una auditoría real al sistema.

### 3. Separar entornos de verdad

Empecé con un solo proyecto de Supabase para todo. Antes de ir a producción, creé un segundo proyecto exclusivo para prod. Eso significó:

Reescribir el schema completo en un archivo autónomo de 1,145 líneas — 29 tablas, 10 enums, 19 funciones, 25 triggers, 97 políticas RLS, 90+ índices. No confiar en el historial de migraciones, sino tener un archivo que levanta toda la base desde cero.

Archivos `.env` separados por ambiente con scripts explícitos: `npm run dev` contra Supabase dev, `npm run build` contra Supabase prod. Nada de "espero que `.env.local` tenga los valores correctos".

VAPID keys nuevas para producción, HMAC keys exclusivas, service role keys verificadas. Cada secreto con su propio valor por ambiente.

## Push notifications: más difícil de lo que parece

La idea es simple: cuando el barista agrega un sello, el cliente recibe una notificación en su teléfono. La implementación no lo es.

El flujo completo: INSERT en `eventos_sello` → trigger PostgreSQL → `pg_net` llama a una Edge Function → la Edge Function busca las suscripciones push del cliente → envía Web Push con `web-push` → el Service Worker del cliente recibe y muestra la notificación.

Descubrí que la columna `auth` en `push_subscriptions` colisiona con el schema `auth` de Supabase. Tuve que renombrarla a `auth_key`. También que una VAPID key truncada en un carácter (le faltaba una 'A' al final) causa un error completamente opaco. Y que tener políticas RLS sin los `GRANT` correspondientes hace que las queries fallen silenciosamente — sin error, simplemente no devuelven datos.

Pero cuando funciona, funciona bien. El cliente ve la notificación 2-3 segundos después de que el barista agrega el sello, sin importar si la app está abierta o no.

## CI/CD: el flujo que no quieres configurar pero necesitas

GitHub Actions con un workflow por repositorio. Push a `main` → corre TypeCheck + tests unitarios + E2E → si pasa, auto-merge a `development`. Cuando quiero desplegar a producción, trigger manual que hace merge `development` → `production` → build → deploy a Netlify.

Entre los dos repos hay 84 tests unitarios y 61 E2E. Los E2E de staging corren contra Supabase real — no mocks. Si un test falla, el merge no pasa.

El POS todavía no tiene sitio de producción en Netlify. La app de fidelidad sí: [lacommune.netlify.app](https://lacommune.netlify.app/).

## Claude Code en un proyecto real de producción

En el post anterior mencioné que Claude Code fue mi copiloto. En esta fase fue más que eso — fue el equivalente a tener un equipo de backend, seguridad y DevOps disponible 24/7.

El `CLAUDE.md` del proyecto tiene más de 500 líneas. Documenta cada tabla, cada módulo, cada decisión de arquitectura, cada migración SQL ejecutada, cada variable de entorno, cada auditoría. Eso permite que cada sesión de trabajo arranque con contexto completo — no hay "déjame explicarte el proyecto desde cero".

Donde más valor agregó en esta fase:

La auditoría de seguridad la hicimos juntos. Claude encontró la vista sin `security_invoker`, las funciones sin `search_path`, los PINs en texto plano. No es que yo no hubiera llegado ahí eventualmente — es que llegamos en una tarde en vez de una semana.

Las migraciones de producción fueron 11 archivos SQL ejecutados en orden, cada uno validado antes de correr el siguiente. Un error en la migración 5 puede dejarte con una base inconsistente. Tener a alguien que revise cada statement antes de ejecutarlo reduce mucho el riesgo.

El schema de producción — esas 1,145 líneas — lo construimos revisando tabla por tabla contra la base de desarrollo, verificando que no faltara nada. Encontramos dos columnas que existían en dev pero no estaban en el schema escrito (`activo` y `descripcion` en `categorias_menu`). En producción, eso hubiera sido un error 400 silencioso.

## Lo que aprendí esta vez

**La seguridad no es un feature — es un requisito.** Es tentador dejar los PINs en texto plano "porque es solo para el equipo interno". Pero los hábitos que formas en tu primer proyecto son los que vas a repetir. Mejor hacerlo bien desde el inicio.

**Producción te obliga a ser honesto.** En desarrollo puedes ignorar que una VAPID key está truncada, que falta un GRANT, que una policy está duplicada. Producción no perdona. Cada shortcut que tomé en dev me costó tiempo en producción.

**Separar ambientes es inversión, no gasto.** Configurar dos proyectos de Supabase, dos sets de env vars, dos sitios de Netlify — se siente como overhead. Hasta que necesitas hacer un cambio destructivo en el schema y agradeces poder probarlo sin tocar datos reales.

**Documentar es una forma de pensar.** El CLAUDE.md no es solo para Claude — es para mí. Escribir qué hice, por qué lo hice, y qué falta, me obliga a procesar las decisiones. Varias veces descubrí inconsistencias solo por intentar documentarlas.

## Qué sigue

La cafetería sigue en preparación. Pero el sistema ya no es un prototipo — es software de producción con tests, seguridad auditada, y deployment automatizado.

Lo siguiente: pedidos desde la app (QR ordering), impresión de tickets para el POS, terminal de pago integrada, y eventualmente facturación electrónica (CFDI 4.0). Cada feature se construye sobre una base que ya está probada.

El post anterior terminaba con "el día uno ya va a tener sistema de fidelidad". Este termina diferente: el día uno ya va a tener todo el sistema.

---

*Si te interesa el stack técnico: Next.js (App Router), Supabase (auth, PostgreSQL, RLS, Edge Functions, Realtime), TypeScript, Tailwind CSS, Zustand, Playwright, Vitest, GitHub Actions, Netlify. Costo mensual de infraestructura: $0.*
