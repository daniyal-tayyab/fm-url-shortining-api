import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import { primary } from "./styles/Theme";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <ThemeProvider theme={primary}>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
