export interface Post {
  id: string
  data: Data
  body: string
  filePath: string
  digest: string
  rendered: Rendered
  collection: string
}

export interface Data {
  title: string
  pubDate: string
  description: string
  author: string
  image: Image
  tags: string[]
}

export interface Image {
  url: string
  alt: string
}

export interface Rendered {
  html: string
  metadata: Metadata
}

export interface Metadata {
  headings: Heading[]
  localImagePaths: any[]
  remoteImagePaths: any[]
  frontmatter: Frontmatter
  imagePaths: any[]
}

export interface Heading {
  depth: number
  slug: string
  text: string
}

export interface Frontmatter {
  title: string
  pubDate: string
  description: string
  author: string
  image: Image2
  tags: string[]
}

export interface Image2 {
  url: string
  alt: string
}
