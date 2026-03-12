import config from '@/theme.config'
import type { ResolvedTag } from '@/types'
import { getCafePosts } from '@/util/cafe'
import { getPosts } from '@/util/posts'
import { getProjects } from '@/util/projects'

export const sortTags = (t1: ResolvedTag, t2: ResolvedTag) =>
  t1.tag.localeCompare(t2.tag)

export const resolveTags = (rawTags: string[]): ResolvedTag[] => {
  const resolvedTags = [...new Set(rawTags)].map((t) => {
    const tag = t.toLowerCase()

    return {
      tag,
      icon: config.tagIcons[tag] || 'tabler--tag'
    }
  })

  resolvedTags.sort(sortTags)

  return resolvedTags
}

export const generateTags = async (includeDrafts = false): Promise<ResolvedTag[]> => {
  const allTags = [
    ...(await getPosts(undefined, undefined, includeDrafts)),
    ...(await getCafePosts(undefined, includeDrafts)),
    ...(await getProjects())
  ].flatMap((p) => p.data.tags)

  return resolveTags([...new Set(allTags)])
}

export const getTagUsage = async (tag: string): Promise<number> =>
  (await getPosts(tag, undefined, false)).length +
  (await getCafePosts(tag, false)).length +
  (await getProjects(tag)).length
