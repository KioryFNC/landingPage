import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;

    --fs-sm: 1.4rem;
    --fs-base: 1.6rem;
    --fs-lg: 2rem;
    --fs-xl: 2.4rem;
    --fs-2xl: 4rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ::-webkit-scrllbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.scrollbarTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.scrollbarThumb};
      border-radius: 10px; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.scrollbarThumbHover};
    }
  }
  html {
    font-family: 'Asap', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.8;
    color: ${(props) => props.theme.textColor};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    background: ${(props) => props.theme.background};
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: 'Asap', sans-serif;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  span, strong, p, a {
    font-family: 'Inconsolata', sans-serif;
    line-height: 1.6;
    font-size: var(--fs-base);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: var(--fs-2xl);
    text-align: center;
  }

  h2 {
    font-size: var(--fs-xl);
    text-align: center;
  }

  h3 {
    font-size: var(--fs-lg);
    text-align: center;
    background: linear-gradient(
      95deg,
      ${(props) => props.theme.gradientStart} 35%,
      ${(props) => props.theme.gradientEnd} 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h4 {
    font-size: var(--fs-base);
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
  }
  
  a:hover {
    background: linear-gradient(
      95deg,
      ${(props) => props.theme.gradientStart} 35%,
      ${(props) => props.theme.gradientEnd} 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transform: scale(1.1);
  }

  @media (width >= 80em){
    :root {
      --fs-base: 2rem;
      --fs-lg: 3.6rem;
      --fs-xl: 4.8rem;
      --fs-2xl: 6.4rem;
    }
  }
`;
export default GlobalStyle;
