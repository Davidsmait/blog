# Borradores privados

Esta carpeta vive **fuera** de `src/content/` a propósito: Astro nunca la procesa, nunca se publica, nunca aparece en el build. Es tu espacio para pensar en voz alta.

## Flujo

```
idea suelta
   ↓ (skill draft-capture detecta "idea de borrador" o similar)
drafts/<slug>.md  (status: idea)
   ↓ (vas agregando ideas con timestamp)
drafts/<slug>.md  (status: outline → draft)
   ↓ (cuando estés listo, le dices a Claude "promueve el borrador X")
src/content/ensayos/<slug>.md  (ya publicable)
```

## Estados

- `idea` — solo una premisa y notas sueltas
- `outline` — tienes una estructura/esqueleto pero no prosa
- `draft` — prosa terminada, falta editar
- `ready` — listo para promover a `/ensayos/`
- `archived` — descartado o pausado

## Frontmatter de cada borrador

```yaml
---
title: "Título tentativo"
slug: kebab-case-slug
status: idea
tags: [filosofia, carrera]
targetSection: ensayos   # o posts, cafe
createdAt: 2026-05-21
updatedAt: 2026-05-21
---
```

## Reglas

1. **Nunca** se commitea contenido de borrador a `main` sin pedir permiso explícito.
2. La skill global `draft-capture` se encarga de anexar ideas, no de reescribir.
3. El índice de borradores está en `INDEX.md` — ahí ves todo de un vistazo.
4. Para promover un borrador a publicación, di a Claude algo como _"publica el borrador filosofia-empleo"_ o _"mueve a ensayos el borrador X"_.

## Privacidad

Por defecto los borradores **NO** se versionan. El `.gitignore` ya está configurado así:

```
drafts/*
!drafts/README.md
!drafts/.gitkeep
```

Eso significa: la estructura del sistema (este README y el `.gitkeep`) sí se publica en GitHub, pero el contenido de los borradores se queda solo en tu disco local.

### Si quieres sincronizar entre máquinas

Tres opciones, en orden de complejidad:

1. **Quitar `drafts/*` del `.gitignore`** y versionar todo. Pierdes privacidad: si tu repo es público, los borradores también.
2. **Repo privado paralelo solo para `drafts/`**. Crea un git submodule o un repo separado que clones dentro de `drafts/`.
3. **Sincronizar manualmente con iCloud/Dropbox** apuntando la carpeta `drafts/` a un folder sincronizado.

Empieza con la opción default (privacidad total). Si en algún momento la sincronización entre máquinas se vuelve un dolor real, escalamos.
