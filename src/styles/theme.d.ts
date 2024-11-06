import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      skyBlue: string;
      error: string;
      lightError: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      foreGround: string;
      backGround: string;
      white: string;
      black: string;
    };
  }
}
