# David Blog — Claude Instructions

## Project Overview
Astro-based personal blog + specialty coffee learning platform (Roadmap Barista de Especialidad).
Bilingual: Spanish (primary) and English.

## Tech Stack
- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS + custom CSS with color-mix(), CSS custom properties
- **Fonts:** IBM Plex Sans (body) + Instrument Serif (display)
- **Color scheme:** `scheme-premium` (warm gold/cream tones)
- **Hosting:** Netlify
- **Backend services:** Supabase (for La Commune POS/loyalty)

## Critical: Bilingual Parity Rules

This project maintains Spanish and English versions of the coffee curriculum. **Every change to one language MUST be mirrored in the other.** This is the #1 source of bugs.

### File Mapping

| Spanish | English |
|---------|---------|
| `src/content/cafe/*.md` | `src/content/cafe-en/*.md` |
| `src/pages/barista-roadmap.astro` | `src/pages/en/barista-roadmap.astro` |
| `src/pages/cafe/` | `src/pages/en/cafe-en/` |

### Slugs Are Shared
English content files use the **same slugs** as Spanish (e.g., `roadmap-1-4-el-agua.md` exists in both `cafe/` and `cafe-en/`). Never translate slugs — only translate the content inside.

### URL Patterns

| Spanish | English |
|---------|---------|
| `/barista-roadmap` | `/en/barista-roadmap` |
| `/cafe/{slug}` | `/en/cafe-en/{slug}` |
| `/cafe/guia-herramientas-agua` | `/en/cafe-en/water-testing-tools-guide` |

### When Adding New Features to the Roadmap
1. Add to Spanish roadmap (`src/pages/barista-roadmap.astro`)
2. Add to English roadmap (`src/pages/en/barista-roadmap.astro`)
3. If it involves CSS — add the same CSS to both files
4. If it involves JS — add the same JS logic to both files
5. If it involves new pages — create both `/cafe/` and `/en/cafe-en/` versions
6. If it involves content links — use correct URL patterns per language

### Checklist Before Finishing Any Bilingual Change
- [ ] Spanish page has the feature
- [ ] English page has the same feature with translated text
- [ ] URLs point to correct language paths (`/cafe/` vs `/en/cafe-en/`)
- [ ] JS uses the same cookie/storage keys (shared across languages)
- [ ] Slugs are NOT translated (they stay in Spanish in both versions)

## Lesson Progress System
- Uses cookies (`roadmap_read`) to track which lessons the user has visited
- Cookie is shared across both languages (same `path=/`)
- Bonus content unlocks when all phase lessons are read
- The `updateBonusContent()` function checks this on both roadmap pages

## Content Schema (cafe/cafe-en collections)
```yaml
title: string
description: string
publishedDate: date
draft: boolean
tags: string[]
phase: number (1-9)
lessonOrder: number
isPremium: boolean
```

## Layout System
- `LessonLayout.astro` — for all cafe lessons (handles both languages via `collection` prop)
- `PageLayout.astro` — for standalone pages like the roadmap
- `BaseLayout.astro` — root HTML, head, fonts, mode manager

## Interactive Components
- `Quiz.astro` — bilingual quiz at end of lessons (data in `src/data/quizzes.ts`)
- 5 SVG diagram components in `src/components/diagrams/`
- Diagram-to-lesson mapping lives in `LessonLayout.astro`

## Design Principles
- Dark mode by default, premium color scheme
- Awwwards-inspired: custom cursor, reveal animations, noise overlay
- Minimal but intentional — no gratuitous decoration
- `color-mix(in srgb, var(--color-accent) X%, transparent)` for opacity layers
- Cubic-bezier easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
