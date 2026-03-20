import config from '@/theme.config'
import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'

export async function GET() {
  const lessons = await getCollection('cafe')
  const publishedLessons = lessons
    .filter(l => !l.data.draft)
    .sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime())

  return rss({
    title: 'Roadmap Barista de Especialidad — David San Luis Aguirre',
    description: 'Lecciones de café de especialidad: desde fundamentos hasta la física de la extracción.',
    site: config.site,
    items: publishedLessons.map(({ data, slug }) => ({
      link: `cafe/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedDate),
      categories: data.tags
    })),
    customData: `<language>es</language>`
  })
}
