import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends IThemeProps {}
}

interface IThemeProps {
  colors: IColorsTheme
  fonts: {
    robotoLight: string
    robotoBold: string
    robotoRegular: string
    robotoMedium: string
    montserratLight: string
    montserratMedium: string
    montserratSemiBold: string
  }
}

export interface IColorsTheme {
  primary: string
  secondary: string
  gray100: string
  black100: string
  white: string
}
