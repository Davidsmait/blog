---
title: "Construyendo La Commune: una PWA para cafeteria independiente con Claude Code"
description: "Como desarrolle una Progressive Web App completa para la cafeteria La Commune usando Next.js, Firebase y Claude Code como copiloto de desarrollo."
publishedDate: 2026-03-05
tags:
  - pwa
  - nextjs
  - firebase
  - claude-code
  - ia
  - desarrollo
---

## La idea

La Commune es una cafeteria independiente en Mineral de la Reforma, Mexico. Como muchos negocios locales, necesitaba una forma de fidelizar a sus clientes sin depender de tarjetas fisicas que se pierden o se olvidan. La solucion: una **tarjeta de lealtad digital** que vive en el celular del cliente como una PWA.

El proyecto esta desplegado en [lacommune.netlify.app](https://lacommune.netlify.app/).

## Stack tecnologico

La aplicacion se construyo con un stack moderno enfocado en rendimiento y experiencia movil:

- **Next.js 15** con App Router y React 19
- **Firebase** (Firestore como base de datos, sin backend propio)
- **TypeScript** para seguridad de tipos en todo el proyecto
- **Tailwind CSS** + **Radix UI** para componentes accesibles
- **Framer Motion** para animaciones fluidas
- **Netlify** para el despliegue

## Funcionalidades principales

### Para los clientes

- **Tarjeta de lealtad digital** con sellos visuales y codigo QR unico
- **Menu del cafe** dinamico con precios, ingredientes y disponibilidad
- **Promociones activas** con filtros por dia de la semana
- **Recuperacion de tarjeta** usando el numero de telefono
- **Soporte offline completo** - la tarjeta funciona sin internet

### Para el barista

- **Panel de administracion** protegido con PIN (verificacion HMAC-SHA256 del lado del servidor)
- **Escaner QR** para agregar sellos rapidamente
- **Gestion de menu** - crear secciones, items, toggle de disponibilidad
- **Dashboard de analiticas** con graficas de tendencias (Recharts)
- **Directorio de clientes** con historial de visitas

## La parte PWA

Este fue uno de los aspectos mas interesantes del proyecto. La app funciona como una aplicacion nativa instalable:

### Service Worker personalizado

El `sw.js` implementa multiples estrategias de cache:

```javascript
// Cache-first para assets estaticos de Next.js
// Stale-while-revalidate para paginas de tarjeta
// Exclusion inteligente de videos (incompatibles con range requests)
// Exclusion de peticiones Firebase y RSC
```

Cada deploy genera un nuevo `BUILD_ID` que invalida el cache automaticamente.

### Cola offline para sellos

Cuando un barista agrega un sello sin conexion, el sistema:

1. Guarda el sello en `localStorage` con timestamp
2. Registra un evento de Background Sync
3. Al recuperar conexion, sincroniza automaticamente
4. Envia un broadcast a todas las pestanas abiertas para actualizar la UI

### Manifest y experiencia nativa

- Modo `standalone` (sin barra del navegador)
- Iconos para home screen
- Shortcuts directos a "Mi tarjeta" y "Menu"
- Pagina offline dedicada con branding del cafe

## Claude Code como copiloto

Aqui es donde la historia se pone interesante. **Claude Code** fue mi herramienta principal de desarrollo durante todo el proyecto. No se trato de generar codigo y pegarlo - fue un flujo de trabajo colaborativo real.

### Como lo use

El proyecto tiene un archivo `CLAUDE.md` en la raiz que funciona como contexto persistente. Ahi documente:

- La estructura del proyecto y convenciones
- El esquema de Firestore (colecciones, campos, relaciones)
- Patrones especificos como el uso de `reactfire` con `suspense: false` para compatibilidad con React 19
- Reglas de seguridad de Firestore
- Decisiones de arquitectura

Esto permitio que Claude Code entendiera el proyecto completo en cada sesion y sugiriera cambios coherentes con la arquitectura existente.

### Donde brillo

- **Service Worker** - La logica de cache con multiples estrategias, exclusiones y versionamiento fue iterada directamente con Claude Code. Debuggear service workers es notoriamente dificil y tener un copiloto que entiende el contexto completo fue invaluable.

- **Seguridad del panel admin** - La implementacion de verificacion de PIN con HMAC-SHA256, timing-safe comparison y rate limiting por IP fue desarrollada con atencion a mejores practicas de seguridad.

- **Sistema offline** - La cola de sincronizacion con Background Sync, periodic sync y broadcast entre pestanas requirio coordinar multiples APIs del navegador. Claude Code ayudo a manejar los edge cases.

- **Transacciones de Firestore** - Los stamps se agregan dentro de `runTransaction()` para garantizar atomicidad, y Claude Code ayudo a estructurar la logica transaccional correctamente.

### El flujo de trabajo

El archivo `.claude/settings.local.json` configura los permisos para que Claude Code pueda ejecutar comandos de npm, Firebase y otras herramientas del proyecto directamente. Esto permite un ciclo rapido de:

1. Describir la funcionalidad o el bug
2. Claude Code lee los archivos relevantes
3. Implementa los cambios
4. Ejecuta el build o los tests
5. Itera si algo falla

No es magia - sigue siendo necesario entender que esta pasando, revisar los cambios y guiar la direccion del desarrollo. Pero la velocidad de iteracion es dramaticamente mayor.

## Lecciones aprendidas

1. **PWA en 2026 sigue siendo viable** - Para negocios locales que no necesitan (ni quieren) publicar en app stores, una PWA bien hecha ofrece una experiencia nativa sin la friccion de descarga.

2. **Firebase sin backend funciona** - Para apps de este tamano, las transacciones de Firestore desde el cliente con reglas de seguridad bien escritas eliminan la necesidad de un servidor.

3. **El contexto es todo con IA** - Un archivo `CLAUDE.md` bien mantenido hace la diferencia entre sugerencias genericas y cambios que realmente encajan en tu proyecto.

4. **Offline-first es mas complejo de lo que parece** - Background Sync, cache invalidation, broadcast entre pestanas... cada pieza tiene sus edge cases. Pero el resultado vale la pena para una app que se usa en una cafeteria donde el WiFi puede fallar.

## Resultado

La Commune ahora tiene un sistema de lealtad digital funcional, instalable, que funciona offline y que se gestiona desde un panel de administracion protegido. Todo construido con tecnologias web estandar y desplegado en Netlify con costo cero de infraestructura (dentro del free tier de Firebase y Netlify).

El codigo fuente refleja un proyecto real, no un demo - con manejo de errores, seguridad, accesibilidad y soporte offline pensados desde el inicio.
