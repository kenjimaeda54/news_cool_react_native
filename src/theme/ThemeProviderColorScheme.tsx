import {ThemeProvider} from '@emotion/react';
import {ReactNode, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import lightTheme from './light.theme';
import darkTheme from './dark.theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enum TypeTheme {
  light = 'ligth',
  dark = 'dark',
}

interface IThemeProviderColorScheme {
  children: ReactNode;
}

export default function ThemeProviderColorScheme({
  children,
}: IThemeProviderColorScheme) {
  const apparence =
    Appearance.getColorScheme() === 'light' ? TypeTheme.light : TypeTheme.dark;
  const [typeTheme, setTypeTheme] = useState<TypeTheme>(apparence);

  useEffect(() => {
    Appearance.addChangeListener(listener => {
      setTypeTheme(
        listener.colorScheme === 'light' ? TypeTheme.light : TypeTheme.dark,
      );
    });
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider
        theme={typeTheme === TypeTheme.light ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
