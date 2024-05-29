import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import theme from "./styles/theme";

import { MyContext } from "./myContext"; // importe contexto

import { Routes } from "./routes";

// O ReactDom vai renderizar a div "root"!
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{name: "Brenno Eudes", email: "brenno@teste.com"}}> {/* O contexto provê um valor p/ todas as rotas */}
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
