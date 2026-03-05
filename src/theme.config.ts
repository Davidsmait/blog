import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://davidsanluisaguirre.com',
  title: 'David San Luis Aguirre',
  description: 'A minimal Astro blog theme',
  author: 'David San Luis',
  navbarItems: [
    { label: 'Blog', href: '/posts', icon: 'tabler--article' },
    { label: 'Cafe', href: '/barista-roadmap', icon: 'tabler--coffee' },
    { label: 'Projects', href: '/projects', icon: 'tabler--code' },
    { label: 'Tags', href: '/tags', icon: 'tabler--tags' },
    { label: 'About', href: '/about', icon: 'tabler--user' }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/Davidsmait',
      label: 'Github'
    },
    {
      icon: 'tabler--brand-linkedin',
      href: 'https://www.linkedin.com/in/davidsanluisaguirre',
      label: 'LinkedIn'
    },
    {
      icon: 'tabler--brand-instagram',
      href: 'https://www.instagram.com/davidsanluisaguirre/',
      label: 'Instagram'
    },
    {
      icon: 'tabler--mail',
      href: 'mailto:david_sanluis@outlook.com',
      label: 'Email'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    },
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-warm',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: true,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book',
    cafe: 'tabler--coffee',
    barista: 'tabler--coffee',
    especialidad: 'tabler--star',
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
