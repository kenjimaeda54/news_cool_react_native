import { ReactElement, ReactNode } from 'react'
import { render } from '@testing-library/react-native'
import ThemeProviderColorScheme from '../themes/ThemeProviderColorScheme'
import { ThemeProvider, useTheme } from '@emotion/react'
import darkTheme from '@/themes/dark.theme'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { Appearance } from 'react-native'
import lightTheme from '@/themes/light.theme'

type Options = Parameters<typeof render>[1]

//para safe are provider deve passar o initialMetrics pra testar
//https://github.com/th3rdwave/react-native-safe-area-context/issues/69
const allTheProviders = ({ children }: { children: ReactNode }) => {
  const colorScheme = Appearance.getColorScheme()

  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}>
      <ThemeProvider
        theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

const newRender = (ui: ReactElement, options?: Options) =>
  render(ui, { wrapper: allTheProviders, ...options })

export * from '@testing-library/react-native'

export { newRender as render }
