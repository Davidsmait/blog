import config from '@/theme.config'
import { defineCollection, z, type SchemaContext } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(config.author),
      description: z.string(),
      publishedDate: z.date(),
      draft: z.boolean().optional().default(false),
      canonicalURL: z.string().optional(),
      openGraphImage: image().or(z.string()).optional(),
      tags: z.array(z.string()).default([])
    })
})

const cafeSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    author: z.string().default(config.author),
    description: z.string(),
    publishedDate: z.date(),
    draft: z.boolean().optional().default(false),
    canonicalURL: z.string().optional(),
    openGraphImage: image().or(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    // Roadmap fields
    phase: z.number().min(1).max(9).optional(),
    lessonOrder: z.number().optional(),
    isPremium: z.boolean().optional().default(false)
  })

const cafe = defineCollection({
  type: 'content',
  schema: cafeSchema
})

const cafeEn = defineCollection({
  type: 'content',
  schema: cafeSchema
})

const projects = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      startDate: z.date(),
      endDate: z.date().optional().nullable(),
      tags: z.array(z.string()).default([])
    })
})

export const collections = { posts, cafe, 'cafe-en': cafeEn, projects }
