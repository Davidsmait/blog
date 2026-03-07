import type { Root } from 'mdast'
import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

interface RemarkFile {
  data: {
    astro: {
      frontmatter: Record<string, unknown>
    }
  }
}

export default function () {
  return function (tree: Root, { data }: RemarkFile) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    data.astro.frontmatter.readingTime = readingTime.text
  }
}
