import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      text: string;
      btn_text: string;
      btn_shape: string;
      result: string;
      select: string;
    };
  }
}
