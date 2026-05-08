/**
 * Historical figures referenced in lessons and posts (e.g., the espresso history article).
 *
 * Used by HistoricalFiguresPlugin.astro to render marginalia cards on
 * desktop and tap-to-reveal cards on mobile.
 *
 * In markdown, mark a name with:
 *   <span data-figure="bezzera">Luigi Bezzera</span>
 *
 * Add the figure id to this record. Both ES and EN copy must be filled.
 *
 * Images live in /public/images/historical-figures/. Provide both webp
 * (primary) and a fallback (jpg/png) in the `image` field — the plugin
 * uses <picture> with the webp as <source> and the fallback as <img>.
 */
export interface FigureBio {
  /** Short role/profession line — appears under the name. */
  role: string
  /** Two short sentences with the historical contribution. */
  bio: string
}

export interface HistoricalFigure {
  /** Stable id used as data-figure value. Lowercase, no spaces. */
  id: string
  /** Full name as it appears on the card. */
  name: string
  /** Birth-death years (or just birth year if alive). e.g. "1857–1939" */
  years?: string
  /** Image paths relative to the site root. */
  image: {
    webp: string
    fallback: string
    alt: string
  }
  /** Source attribution for the image (Wikimedia Commons URL or note). */
  imageCredit?: string
  /** Bilingual copy. */
  es: FigureBio
  en: FigureBio
  /** Optional Wikipedia link (uses ES wiki when available, falls back to EN). */
  wikiUrl?: {
    es?: string
    en?: string
  }
}

export const historicalFigures: Record<string, HistoricalFigure> = {
  bezzera: {
    id: 'bezzera',
    name: 'Luigi Bezzera',
    years: '1857–1939',
    image: {
      webp: '/images/historical-figures/bezzera.webp',
      fallback: '/images/historical-figures/bezzera.jpg',
      alt: 'Luigi Bezzera junto a su máquina de espresso, Expo de Milán 1906'
    },
    imageCredit:
      'Wikimedia Commons — Bezzera & caffè espresso (dominio público)',
    es: {
      role: 'Ingeniero milanés. 1857–1939.',
      bio: 'Patentó el 19 de diciembre de 1901 la primera máquina de espresso comercialmente viable. Introdujo el portafiltro removible y los cabezales de grupo múltiples.'
    },
    en: {
      role: 'Milanese engineer. 1857–1939.',
      bio: 'Patented the first commercially viable espresso machine on December 19, 1901. Introduced the removable portafilter and multiple group heads.'
    },
    wikiUrl: {
      es: 'https://es.wikipedia.org/wiki/Luigi_Bezzera',
      en: 'https://en.wikipedia.org/wiki/Luigi_Bezzera'
    }
  },

  moriondo: {
    id: 'moriondo',
    name: 'Angelo Moriondo',
    years: '1851–1914',
    image: {
      webp: '/images/historical-figures/moriondo.webp',
      fallback: '/images/historical-figures/moriondo.png',
      alt: 'Retrato de Angelo Moriondo'
    },
    imageCredit: 'Wikimedia Commons — Angelo Moriondo retouched (CC0)',
    es: {
      role: 'Inventor turinés. 1851–1914.',
      bio: 'Patentó el 16 de mayo de 1884 la primera máquina de café por vapor a presión. Nunca la industrializó: solo construyó unas pocas a mano para sus propios establecimientos.'
    },
    en: {
      role: 'Turinese inventor. 1851–1914.',
      bio: 'Patented the first pressurized steam coffee machine on May 16, 1884. He never industrialized it — only built a few by hand for his own establishments.'
    },
    wikiUrl: {
      es: 'https://es.wikipedia.org/wiki/Angelo_Moriondo',
      en: 'https://en.wikipedia.org/wiki/Angelo_Moriondo'
    }
  },

  pavoni: {
    id: 'pavoni',
    name: 'Desiderio Pavoni',
    years: '1863–1928',
    image: {
      webp: '/images/historical-figures/pavoni.webp',
      fallback: '/images/historical-figures/pavoni.jpg',
      alt: 'Folleto de instrucciones de la máquina La Pavoni Ideale, 1912'
    },
    imageCredit:
      'Wikimedia Commons — La Pavoni Ideale leaflet 1912 (dominio público)',
    es: {
      role: 'Empresario italiano. 1863–1928.',
      bio: 'Compró la patente de Bezzera en 1903 y fundó La Pavoni en 1905. Añadió la válvula de escape y el vaporizador (steam wand) — la pieza que años después haría posibles las bebidas con leche.'
    },
    en: {
      role: 'Italian entrepreneur. 1863–1928.',
      bio: 'Bought Bezzera\'s patent in 1903 and founded La Pavoni in 1905. Added the pressure release valve and the steam wand — the piece that would later make milk drinks possible.'
    },
    wikiUrl: {
      en: 'https://en.wikipedia.org/wiki/La_Pavoni'
    }
  },

  gaggia: {
    id: 'gaggia',
    name: 'Achille Gaggia',
    years: '1895–1961',
    image: {
      webp: '/images/historical-figures/gaggia.webp',
      fallback: '/images/historical-figures/gaggia.jpg',
      alt: 'Retrato histórico de Achille Gaggia'
    },
    imageCredit:
      'Archivio storico Senato della Repubblica — CC BY 3.0 IT (vía Wikimedia Commons)',
    es: {
      role: 'Barista milanés. 1895–1961.',
      bio: 'Patentó *Lampo* (1938) — el primer mecanismo sin vapor — y el sistema de palanca hidráulica (1947) que produjo la primera crema. La leyenda dice que se inspiró en el pistón de un Jeep americano.'
    },
    en: {
      role: 'Milanese barista. 1895–1961.',
      bio: 'Patented *Lampo* (1938) — the first steamless mechanism — and the hydraulic lever system (1947) that produced the first crema. Legend says he was inspired by the piston of a U.S. Army Jeep.'
    },
    wikiUrl: {
      es: 'https://es.wikipedia.org/wiki/Achille_Gaggia',
      en: 'https://en.wikipedia.org/wiki/Achille_Gaggia'
    }
  },

  valente: {
    id: 'valente',
    name: 'Carlo Ernesto Valente',
    years: '1908–1989',
    image: {
      webp: '/images/historical-figures/faema-e61.webp',
      fallback: '/images/historical-figures/faema-e61.jpg',
      alt: 'Máquina Faema E61 de 1961'
    },
    imageCredit:
      'Wikimedia Commons — Faema E61 1961, foto de Stefano (CC BY-SA 2.0)',
    es: {
      role: 'Fundador de Faema (Milán, 1945).',
      bio: 'Patentó el grupo E61 en 1961 — primera máquina con bomba eléctrica, pre-infusión automática y termosifón. Nombrada por el eclipse total visible desde Europa el 15 de febrero de ese año.'
    },
    en: {
      role: 'Founder of Faema (Milan, 1945).',
      bio: 'Patented the E61 group in 1961 — first machine with an electric pump, automatic pre-infusion, and thermosiphon. Named after the total solar eclipse visible from Europe on February 15 that year.'
    },
    wikiUrl: {
      en: 'https://en.wikipedia.org/wiki/Faema'
    }
  }
}

export type FigureId = keyof typeof historicalFigures
