import type { HTMLAttributes } from 'astro/types'

export const toDateString = (date: Date, lang: 'es' | 'en' = 'es'): string =>
  date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

export const toMonthString = (date: Date, lang: 'es' | 'en' = 'es'): string =>
  date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', {
    year: 'numeric',
    month: 'long',
    day: undefined
  })

const isLocalAsset = (
  image: string | HTMLAttributes<'img'>
): image is HTMLAttributes<'img'> => typeof image !== 'string'

export const resolveOgImageUrl = (image: string | HTMLAttributes<'img'>) => {
  return isLocalAsset(image) ? image.src : image
}
