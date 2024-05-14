import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App01 from "./App01";
import App02 from "./App02";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App02 />
  </ThemeProvider>
);
