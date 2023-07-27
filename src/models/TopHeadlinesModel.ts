export interface TopHeadlinesModel {
  status: string
  totalResults: number
  articles: ArticlesModel[]
}

export interface ArticlesModel {
  source: SourceModel
  author: string | null
  title: string
  description?: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

interface SourceModel {
  id: string | null
  name: string
}
