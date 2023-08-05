import { ConstantsUtils } from '@/utils/constants'
import { useQuery } from '@tanstack/react-query'
import api from './api'
import { TopHeadlinesModel } from '@/models/top_headlines_model'
import { MutableRefObject, useEffect, useRef } from 'react'
import { format, sub } from 'date-fns'
import { API_TOKEN } from '@env'

export interface ISearchTopHeadline {
  dataSearchTopHeadlines: TopHeadlinesModel
  isLoadingSearchTopHeadlines: boolean
  fetchSearchTopHeadlines: (
    search: string
  ) => Promise<TopHeadlinesModel>
  isSuccess: boolean
  refetchSearchTopHeadlines: () => void
  search: MutableRefObject<string>
  isFetchingSearchTopHeadlines: boolean
}

async function fetchSearchTopHeadlines(search: string) {
  const formatDateNow = format(new Date(), 'yyyy-MM-dd')
  const resultSubDate = sub(new Date(), {
    months: 5,
  })
  const formatDateSub = format(resultSubDate, 'yyyy-MM-dd')

  const url = `/top-headlines?apiKey=${API_TOKEN}&q=${search.trim()}&from=${formatDateNow}&to=${formatDateSub}`

  const response = await api.get(url)
  return response.data as TopHeadlinesModel
}

export function useSearchTopHeadline(): ISearchTopHeadline {
  const search = useRef('')

  const {
    data: dataSearchTopHeadlines = {} as TopHeadlinesModel,
    isLoading: isLoadingSearchTopHeadlines,
    isFetching: isFetchingSearchTopHeadlines,
    isSuccess,
    refetch: refetchSearchTopHeadlines,
  } = useQuery(
    [ConstantsUtils.queryIdTopHeadlines, search.current],
    () => fetchSearchTopHeadlines(search.current)
  )

  return {
    dataSearchTopHeadlines,
    isLoadingSearchTopHeadlines,
    fetchSearchTopHeadlines,
    isSuccess,
    refetchSearchTopHeadlines,
    search,
    isFetchingSearchTopHeadlines,
  }
}
