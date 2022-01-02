import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: "Lato", sans-serif;

    .advisory {
      position: absolute;
      z-index: 10;
      color: white;
      background: rgba(18, 140, 127, 0.24);
      margin-right: 56px;
      top: 0;
      right: 0;

      button {
        border: none;
        background: inherit;
        color: inherit;
        font-size: 24px;
        line-height: 29px;
        padding: 9px 20px;
        cursor: pointer;
      }
    }
  }
`;

export default GlobalStyles;
