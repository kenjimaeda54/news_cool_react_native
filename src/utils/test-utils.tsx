import {ReactElement, ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import ThemeProviderColorScheme from '../theme/ThemeProviderColorScheme';
import {ThemeProvider} from '@emotion/react';
import darkTheme from '../theme/dark.theme';

type Options = Parameters<typeof render>[1];

const allTheProviders = ({children}: {children: ReactNode}) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);

const newRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: allTheProviders, ...options});

export * from '@testing-library/react-native';

export {newRender as render};
