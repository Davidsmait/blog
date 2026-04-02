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

## David's Personal Preferences (for content accuracy)
- **Editor:** Cursor (NOT VS Code)
- **API client:** Bruno (NOT Postman)
- **Project management:** Jira (NOT Linear)
- **Browser:** Arc Browser
- **Terminal:** Warp
- **AI tools:** Claude Code
- **Coffee process:** Prefers washed (lavado) — dislikes high acidity from naturals/honeys
- **Espresso machine:** Gemilai Owl G3006 (15-bar semi-auto, PID, 58mm, ULKA pump)
- **Grinder:** MOKKOM 64mm flat burr (100 settings, electronic timer)
- **Favorite pour-over:** Chemex (NOT V60, does NOT use AeroPress)
- **Milk for steaming:** Alpura Selecta Deslactosada (protein-fat ratio for microfoam)
- **Latte cups:** Artilugios — Colección Amantes del Café (handmade ceramic, 294ml, collects them)
- **Tamping station:** HWCMJY 58mm (walnut, 3-in-1, adjustable)
- **Coffee scale:** Diyife 2kg/0.1g (rechargeable, glass panel)
- **GitHub:** github.com/Davidsmait (56+ public repos)
- **GitHub org:** github.com/La-Commune (café de especialidad POS)
- **AWS:** Only uses occasionally at work (not a personal tool — don't list as his own)
- **Lessons validated:** 6 so far — phases 1 (5 lessons) + phase 2 lesson 1 (don't show 39+ until confirmed)

## Critical: Bilingual Parity Rules

This project maintains Spanish and English versions of the coffee curriculum AND standalone pages. **Every change to one language MUST be mirrored in the other.** This is the #1 source of bugs.

### File Mapping

| Spanish | English |
|---------|---------|
| `src/content/cafe/*.md` | `src/content/cafe-en/*.md` |
| `src/pages/barista-roadmap.astro` | `src/pages/en/barista-roadmap.astro` |
| `src/pages/cafe/` | `src/pages/en/cafe-en/` |
| `src/pages/about.mdx` | `src/pages/en/about.mdx` |
| `src/pages/now.mdx` | `src/pages/en/now.mdx` |
| `src/pages/uses.mdx` | `src/pages/en/uses.mdx` |

### Slugs Are Shared
English content files use the **same slugs** as Spanish (e.g., `roadmap-1-4-el-agua.md` exists in both `cafe/` and `cafe-en/`). Never translate slugs — only translate the content inside.

### URL Patterns

| Spanish | English |
|---------|---------|
| `/barista-roadmap` | `/en/barista-roadmap` |
| `/cafe/{slug}` | `/en/cafe-en/{slug}` |
| `/cafe/guia-herramientas-agua` | `/en/cafe-en/water-testing-tools-guide` |
| `/about` | `/en/about` |
| `/now` | `/en/now` |
| `/uses` | `/en/uses` |

### When Adding New Features to the Roadmap
1. Add to Spanish roadmap (`src/pages/barista-roadmap.astro`)
2. Add to English roadmap (`src/pages/en/barista-roadmap.astro`)
3. If it involves CSS — add the same CSS to both files
4. If it involves JS — add the same JS logic to both files
5. If it involves new pages — create both `/cafe/` and `/en/cafe-en/` versions
6. If it involves content links — use correct URL patterns per language

### When Adding New Standalone Pages
1. Create Spanish version in `src/pages/`
2. Create English version in `src/pages/en/`
3. Add hreflang condition in `BaseLayout.astro` (the `/about|/uses|/now` condition block)
4. Add navigation links in both About pages if applicable
5. Add schema.org with `@id` references to central Person/Website

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
- `BaseLayout.astro` — root HTML, head, fonts, mode manager, ALL schema.org Person/WebSite, hreflang logic

## Interactive Components
- `Quiz.astro` — bilingual quiz at end of lessons (data in `src/data/quizzes.ts`)
- 5 SVG diagram components in `src/components/diagrams/`
- Diagram-to-lesson mapping lives in `LessonLayout.astro`
- **Progressive Disclosure (`<details>`/`<summary>`)** — animated accordion for dense lesson sections. Uses `grid-template-rows` animation + JS in `LessonLayout.astro` for smooth open/close. Styled with `color-mix` accent backgrounds, `＋`/`−` icon in circle, and `ease-out-expo` transitions. Use in markdown content files with standard HTML `<details>` tags.

## SEO & Schema Architecture

### Entity Graph (connected via @id)
All schemas reference a central Person and WebSite entity defined in `BaseLayout.astro`:
- `https://davidsanluisaguirre.com/#person` — Person (central identity)
- `https://davidsanluisaguirre.com/#website` — WebSite

Other pages reference these via `{ "@id": ".../#person" }` instead of duplicating data.

### Schema types by page
| Page | Schema |
|------|--------|
| BaseLayout (all pages) | Person + WebSite |
| `/about`, `/en/about` | ProfilePage |
| `/barista-roadmap`, `/en/barista-roadmap` | Course + FAQPage |
| `/posts/*` | BlogPosting + BreadcrumbList |
| `/cafe/*`, `/en/cafe-en/*` | Course (lesson) |
| `/posts`, `/projects`, `/cafe` listings | CollectionPage + ItemList |
| `/now`, `/en/now`, `/uses`, `/en/uses` | WebPage |

### Wikidata
- Entry: Q138853693 (https://www.wikidata.org/wiki/Q138853693)
- Description: "Mexican fullstack developer and specialty coffee content creator"
- Must keep `sameAs` in BaseLayout.astro synced with Wikidata

### hreflang Logic (in BaseLayout.astro)
- `/en/*` pages → strips `/en/` prefix for Spanish alternate
- `/` (home) → explicit link to `/en/`
- Pages matching `/cafe/|/barista-roadmap|/about|/uses|/now` → adds `/en` prefix
- All other pages → no hreflang (monolingual)

### Navigation Structure
- Header nav defined in `src/util/i18n.ts` (`navbarItemsByLang`)
- `/now` and `/uses` are NOT in the navbar — linked from About page footer instead
- About page has editorial-style links (01 Now, 02 Uses) with hover animations

### Dynamic Stats (About pages)
- GitHub repos count loaded client-side from `api.github.com/users/Davidsmait`
- Displays as clickeable stat linking to GitHub profile
- Graceful fallback (shows "—" if API fails)

### RSS Feeds
- Spanish: `/cafe/feed.xml`
- English: `/en/feed.xml`

### Key SEO Files
- `src/pages/robots.txt.ts` — blocks /tags/ and /authors/ to save crawl budget
- `public/site.webmanifest` — PWA manifest
- `SEO-AUDIT-2026.md` — full audit report (project root)
- `SEO-PERFILES-Y-CONTENIDO.md` — profile creation guide (project root)

## Design Principles
- Dark mode by default, premium color scheme
- Awwwards-inspired: custom cursor, reveal animations, noise overlay
- Minimal but intentional — no gratuitous decoration
- `color-mix(in srgb, var(--color-accent) X%, transparent)` for opacity layers
- Cubic-bezier easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Editorial link style: serif italic + number + description + arrow slide on hover
- CV buttons: subtle border, fill-up animation on hover, not pill/rounded

## Lesson Content Guidelines
- **Validate all technical claims** against SCA standards, Barista Hustle, and specialty coffee sources before publishing
- **Quiz coverage:** every major concept in a lesson should have a quiz question — if a section teaches something actionable (like WDT), add a quiz for it
- **Density for beginners:** use `<details>`/`<summary>` progressive disclosure for dense sections. Pattern: always-visible summary paragraph with the key takeaway + expandable details with full explanation. Keeps lessons scannable without losing depth.
- **Tamping pressure standard:** 13-15 kg (~30 lbs), not 13-20 kg
- **Crema freshness window:** 7-21 days post-roast (not just 7-14), varies by roast level — light roasts can peak around day 20
- **9 bars origin:** accidental from Gaggia lever machines (1946), standardized by Faema E61 pump (1961). ~130 PSI.
- **TDS espresso:** 8-12% (competition target 10-12%). Filter coffee 1.2-1.7% for comparison.
