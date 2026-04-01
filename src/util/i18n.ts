export const languages = { es: 'Español', en: 'English' } as const
export type Lang = keyof typeof languages
export const defaultLang: Lang = 'es'

export const ui = {
  es: {
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
    'nav.cafe': 'Café',
    'nav.about': 'Sobre mí',
    'hero.role': 'Desarrollador Web',
    'hero.subtitle': 'Café & Código',
  },
  en: {
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.cafe': 'Coffee',
    'nav.about': 'About me',
    'hero.role': 'Web Developer',
    'hero.subtitle': 'Coffee & Code',
  },
} as const

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

/**
 * Convert a path to the equivalent path in another locale.
 * ES (default) has no prefix; EN gets /en/ prefix.
 */
export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  // Strip trailing slash for consistency (except root)
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '')

  // Remove existing /en prefix if present
  const stripped = path.replace(/^\/en(\/|$)/, '/')

  if (targetLang === defaultLang) {
    return stripped || '/'
  }

  // Add /en prefix
  return `/en${stripped === '/' ? '' : stripped}` || '/en'
}

/** Navbar items per locale */
export const navbarItemsByLang: Record<Lang, { label: string; href: string }[]> = {
  es: [
    { label: 'Blog', href: '/posts' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Café', href: '/barista-roadmap' },
    { label: 'Sobre mí', href: '/about' },
  ],
  en: [
    { label: 'Blog', href: '/en/posts' },
    { label: 'Projects', href: '/en/projects' },
    { label: 'Coffee', href: '/en/barista-roadmap' },
    { label: 'About me', href: '/en/about' },
  ],
}
