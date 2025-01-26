import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
  }
  h1, h2, h3, h4, p {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
    padding: 0;
  }
`;
