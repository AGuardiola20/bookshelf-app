import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router";
import { GlobalStyles } from "./GlobalStyles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <AppRouter />
  </StrictMode>
);
