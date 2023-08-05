import { QueryClient } from '@tanstack/query-core'

export const mockClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0, //React Native: Jest did not exit one second after the test run completed resolve o problema
    },
  },
})
