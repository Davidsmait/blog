import { getCollection, type CollectionEntry } from 'astro:content'

export const sortCafePosts = (
  p1: CollectionEntry<'cafe'>,
  p2: CollectionEntry<'cafe'>
) => p2.data.publishedDate.getTime() - p1.data.publishedDate.getTime()

export const getCafePosts = async (
  tag?: string,
  includeDrafts = import.meta.env.DEV
) => {
  const posts = await getCollection('cafe')

  posts.sort(sortCafePosts)

  return posts
    .filter(
      (p) =>
        !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .filter((p) => includeDrafts || !p.data.draft)
}
