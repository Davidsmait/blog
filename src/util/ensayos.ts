import { getCollection, type CollectionEntry } from 'astro:content'

export const sortEnsayos = (
  e1: CollectionEntry<'ensayos'>,
  e2: CollectionEntry<'ensayos'>
) => e2.data.publishedDate.getTime() - e1.data.publishedDate.getTime()

export const getEnsayos = async (
  tag?: string,
  author?: string,
  includeDrafts = import.meta.env.DEV
) => {
  const ensayos = await getCollection('ensayos')

  ensayos.sort(sortEnsayos)

  return ensayos
    .filter(
      (e) =>
        !tag || e.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .filter(
      (e) => !author || e.data.author.toLowerCase() === author.toLowerCase()
    )
    .filter((e) => includeDrafts || !e.data.draft)
}
