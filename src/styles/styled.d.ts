import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    background: string;
    backgroundButton: string;
    textColor: string;
    scrollbarTrack: string;
    scrollbarThumb: string;
    scrollbarThumbHover: string;
    gradientStart: string;
    gradientEnd: string;
    shadowColor: string;
    backgroundImage?: string;
  }
}
