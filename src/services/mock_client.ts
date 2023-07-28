import { QueryClient } from '@tanstack/query-core'

export const mockClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})
