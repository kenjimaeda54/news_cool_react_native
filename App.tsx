import HomeScreen from './src/screens/home/HomeScreen'
import ThemeProviderColorScheme from './src/themes/ThemeProviderColorScheme'

export default function App() {
  return (
    <ThemeProviderColorScheme>
      <HomeScreen />
    </ThemeProviderColorScheme>
  )
}
