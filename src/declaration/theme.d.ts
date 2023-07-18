import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      gray100: string;
      black100: string;
    };
    fonts: {
      robotoLight: string;
      robotoBold: string;
      robotoRegular: string;
      robotoMedium: string;
      montserratLight: string;
      montserratMedium: string;
      montserratSemiBold: string;
    };
  }
}
