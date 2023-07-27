import { ConstantsUtils } from '@/utils/constants'
import { useQuery } from '@tanstack/react-query'
import api from './api'
import { TopHeadlinesModel } from '@/models/TopHeadlinesModel'

export interface ITopHeadlines {
  data: TopHeadlinesModel
  isLoading: boolean
}

async function fetchTopHeadlines() {
  const response = await api.get(
    '/top-headlines?apiKey=e03da12b408445449464ceb16db4963a&country=us'
  )
  return response.data as TopHeadlinesModel
}

export function useTopHeadlinesServices(): ITopHeadlines {
  const { data = {} as TopHeadlinesModel, isLoading } = useQuery(
    [ConstantsUtils.queryIdTopHeadlines],
    fetchTopHeadlines
  )

  return {
    data,
    isLoading,
  }
}
