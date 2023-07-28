import useHomeViewModel from '@/view_models/useHomeViewModel'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { renderHook } from '@testing-library/react-hooks'
import { queryClient } from '@/services/query_client'
import { ReactNode } from 'react'
import { act } from '@testing-library/react-native'
import { useTopHeadlinesServices } from '../top_headlines.services'
import { mockTopHeadlines } from '@/mock/topHeadlines'
import { mockClient } from '../mock_client'

describe('useTopHeadlinesServices', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={mockClient}>
      {children}
    </QueryClientProvider>
  )

  it('should return mock top headlines when called fetchTopHeadlines', async () => {
    const { result, waitFor } = renderHook(
      () => useTopHeadlinesServices(),
      {
        wrapper,
      }
    )

    act(() => {
      result.current.fetchTopHeadlines()
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(mockTopHeadlines)
  })
})