import useHomeViewModel from '@/view_models/useHomeViewModel'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { renderHook } from '@testing-library/react-hooks'
import { queryClient } from '@/client/query_client'
import { ReactNode } from 'react'
import { act } from '@testing-library/react-native'
import { useTopHeadlinesServices } from '../useTopHeadlinesServices'
import { mockTopHeadlines } from '@/mock/top_headlines'
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
      result.current.fetchTopHeadlines(
        result.current.category.current
      )
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.dataTopHeadlines).toEqual(mockTopHeadlines)
  })
})
