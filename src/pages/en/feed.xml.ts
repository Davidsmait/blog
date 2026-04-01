import config from '@/theme.config'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET() {
  const lessons = await getCollection('cafe-en')
  const publishedLessons = lessons
    .filter((l) => !l.data.draft)
    .sort(
      (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime()
    )

  return rss({
    title: 'Specialty Coffee Barista Roadmap — David San Luis Aguirre',
    description:
      'Specialty coffee lessons: from fundamentals to the physics of extraction.',
    site: config.site,
    items: publishedLessons.map(({ data, slug }) => ({
      link: `en/cafe-en/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedDate),
      categories: data.tags
    })),
    customData: `<language>en</language>`
  })
}
