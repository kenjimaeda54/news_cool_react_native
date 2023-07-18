import HomeScreen from './src/src/home/HomeScreen';
import ThemeProviderColorScheme from './src/theme/ThemeProviderColorScheme';

export default function App() {
  return (
    <ThemeProviderColorScheme>
      <HomeScreen />
    </ThemeProviderColorScheme>
  );
}
