import { NavigationContainer } from '@react-navigation/native'
import ThemeProviderColorScheme from '@/themes/ThemeProviderColorScheme'
import RoutesApp from '@/routes/routes.app'

export default function App() {
  return (
    <ThemeProviderColorScheme>
      <NavigationContainer>
        <RoutesApp />
      </NavigationContainer>
    </ThemeProviderColorScheme>
  )
}
