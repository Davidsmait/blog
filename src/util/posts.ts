import { getCollection, type CollectionEntry } from 'astro:content'

export const sortPosts = <C extends 'posts' | 'posts-en'>(
  p1: CollectionEntry<C>,
  p2: CollectionEntry<C>
) => p2.data.publishedDate.getTime() - p1.data.publishedDate.getTime()

export const getPosts = async (
  tag?: string,
  author?: string,
  includeDrafts = import.meta.env.DEV
) => {
  const posts = await getCollection('posts')

  posts.sort(sortPosts)

  return posts
    .filter(
      (p) =>
        !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .filter(
      (p) => !author || p.data.author.toLowerCase() === author.toLowerCase()
    )
    .filter((p) => includeDrafts || !p.data.draft)
}

export const getEnPosts = async (
  tag?: string,
  author?: string,
  includeDrafts = import.meta.env.DEV
) => {
  const posts = await getCollection('posts-en')

  posts.sort(sortPosts)

  return posts
    .filter(
      (p) =>
        !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .filter(
      (p) => !author || p.data.author.toLowerCase() === author.toLowerCase()
    )
    .filter((p) => includeDrafts || !p.data.draft)
}

export const generateAuthors = async () => {
  const posts = await getPosts()

  return [...new Set(posts.map((p) => p.data.author))]
}
