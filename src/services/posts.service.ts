import type { Post } from "../types/posts"

interface GetPostsOptions {
  filters?: {
    tags?: string[]
  }
}

export function getPosts({ filters }: GetPostsOptions = {}) {
  const posts: Post[] = Object.values(
    import.meta.glob("../pages/posts/*.md", { eager: true })
  )

  if (filters) {
    if (filters.tags) {
      return posts.filter((post) =>
        post.frontmatter.tags.some((tag) => filters.tags?.includes(tag))
      )
    }
  }

  return posts
}

export function getTags() {
  const tags = getPosts().flatMap((post) => post.frontmatter.tags)
  return Array.from(new Set(tags))
}
