import { NavigationContainer } from '@react-navigation/native'
import ThemeProviderColorScheme from '@/themes/ThemeProviderColorScheme'
import RoutesApp from '@/routes/routes.app'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/client/query_client'

export default function App() {
  return (
    <ThemeProviderColorScheme>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RoutesApp />
        </QueryClientProvider>
      </NavigationContainer>
    </ThemeProviderColorScheme>
  )
}
