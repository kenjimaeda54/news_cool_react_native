import { ConstantsUtils } from '@/utils/constants'
import { useQuery } from '@tanstack/react-query'
import api from './api'
import { TopHeadlinesModel } from '@/models/top_headlines_model'
import { MutableRefObject, useEffect, useRef } from 'react'
import { API_TOKEN } from '@env'

export interface ITopHeadlines {
  dataTopHeadlines: TopHeadlinesModel
  isLoadingHeadlines: boolean
  fetchTopHeadlines: (category: string) => Promise<TopHeadlinesModel>
  isSuccess: boolean
  refetchTopHeadlines: () => void
  category: MutableRefObject<string>
  isFetchingHeadlines: boolean
}

async function fetchTopHeadlines(category: string) {
  const response = await api.get(
    `/top-headlines?apiKey=${API_TOKEN}&country=us&category=${category}`
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
    refetch: refetchTopHeadlines,
  } = useQuery(
    [ConstantsUtils.queryIdTopHeadlines, category.current],
    () => fetchTopHeadlines(category.current)
  )

  return {
    dataTopHeadlines,
    isLoadingHeadlines,
    fetchTopHeadlines,
    isSuccess,
    refetchTopHeadlines,
    category,
    isFetchingHeadlines,
  }
}
