import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

createRoot(document.getElementById("root")!).render(
  //TODO: Add dark theme
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
