import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details";

// O ReactDom vai renderizar a div "root"!
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
);
