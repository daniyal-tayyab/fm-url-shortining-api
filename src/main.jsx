import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import { primary } from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={primary}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
