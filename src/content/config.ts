import config from '@/theme.config'
import { defineCollection, z, type SchemaContext } from 'astro:content'

const postsSchema = ({ image }: SchemaContext) =>
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

const posts = defineCollection({
  type: 'content',
  schema: postsSchema
})

const postsEn = defineCollection({
  type: 'content',
  schema: postsSchema
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

// Ensayos: sección personal (filosofía, experiencias, opinión, ideología).
// Vive separada de /posts/ para que reclutadores que solo quieren ver
// contenido técnico no la abran por accidente, y para que el lector que sí
// está interesado sepa que entra a un espacio más íntimo.
const ensayosSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    author: z.string().default(config.author),
    description: z.string(),
    publishedDate: z.date(),
    draft: z.boolean().optional().default(false),
    canonicalURL: z.string().optional(),
    openGraphImage: image().or(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    // Campos específicos de ensayos:
    mood: z
      .enum(['reflexivo', 'critico', 'personal', 'filosofico', 'biografico'])
      .optional(),
    contentWarning: z.string().optional() // p. ej. "política", "salud mental"
  })

const ensayos = defineCollection({
  type: 'content',
  schema: ensayosSchema
})

export const collections = {
  posts,
  'posts-en': postsEn,
  cafe,
  'cafe-en': cafeEn,
  projects,
  ensayos
}
