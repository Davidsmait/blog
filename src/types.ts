import type { ShikiConfig } from 'astro'
import type { HTMLAttributes } from 'astro/types'
import type { SetOptional } from 'type-fest'

type Icon = `tabler--${string}`

export interface ResolvedTag {
  tag: string
  icon: Icon
}

export interface NavItem {
  label: string
  href: string
  icon?: Icon
}

const Modes = ['dark', 'light'] as const

export const ColorSchemes = [
  'scheme-mono',
  'scheme-nord',
  'scheme-aurora'
] as const

export type Mode = (typeof Modes)[number]
export type ColorScheme = (typeof ColorSchemes)[number]

export interface ThemeConfig {
  site: string
  title: string
  description: string
  author: string
  navbarItems: NavItem[]
  footerItems: NavItem[]

  locale: string
  mode: Mode
  modeToggle: boolean
  colorScheme: ColorScheme
  openGraphImage: HTMLAttributes<'img'> | string | undefined
  postsPerPage: number
  projectsPerPage: number
  scrollProgress: boolean
  scrollToTop: boolean
  tagIcons: Record<string, Icon>
  shikiThemes: ShikiConfig['themes']
}

const defaults = {
  locale: 'en',
  mode: Modes[0],
  modeToggle: true,
  colorScheme: ColorSchemes[0],
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {},
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  } as ShikiConfig['themes']
}

type PartialThemeConfig = SetOptional<ThemeConfig, keyof typeof defaults>

export const defineThemeConfig = (config: {
  footerItems: ({ icon: string; href: string; label: string } | { icon: string; href: string; label: string })[];
  scrollProgress: boolean;
  author: string;
  navbarItems: ({ label: string; href: string } | { label: string; href: string } | { label: string; href: string } | {
    label: string;
    href: string
  })[];
  modeToggle: boolean;
  description: string;
  title: string;
  locale: string;
  shikiThemes: { light: string; dark: string };
  mode: string;
  projectsPerPage: number;
  site: string;
  scrollToTop: boolean;
  postsPerPage: number;
  tagIcons: { astro: string; documentation: string; tailwindcss: string };
  openGraphImage: undefined;
  colorScheme: string
}): ThemeConfig => {
  return {
    ...defaults,
    ...config
  }
}
