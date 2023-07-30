import { ConstantsUtils } from '@/utils/constants'
import { useQuery } from '@tanstack/react-query'
import api from './api'
import { TopHeadlinesModel } from '@/models/top_headlines_model'
import { MutableRefObject, useEffect, useRef } from 'react'

export interface ITopHeadlines {
  dataTopHeadlines: TopHeadlinesModel
  isLoadingHeadlines: boolean
  fetchTopHeadlines: (category: string) => Promise<TopHeadlinesModel>
  isSuccess: boolean
  refetch: () => void
  category: MutableRefObject<string>
  isFetchingHeadlines: boolean
}

async function fetchTopHeadlines(category: string) {
  const response = await api.get(
    `/top-headlines?apiKey=e03da12b408445449464ceb16db4963a&country=us&category=${category}`
  )
  return response.data as TopHeadlinesModel
}

export function useTopHeadlinesServices(): ITopHeadlines {
  const category = useRef('general')

  const {
    data: dataTopHeadlines = {} as TopHeadlinesModel,
    isLoading: isLoadingHeadlines,
    isFetching: isFetchingHeadlines,
    isSuccess,
    refetch,
  } = useQuery(
    [ConstantsUtils.queryIdTopHeadlines, category.current],
    () => fetchTopHeadlines(category.current)
  )

  return {
    dataTopHeadlines,
    isLoadingHeadlines,
    fetchTopHeadlines,
    isSuccess,
    refetch,
    category,
    isFetchingHeadlines,
  }
}
