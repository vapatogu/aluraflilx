import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ContexProvider } from "./context/ContexApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContexProvider>
        <App />
      </ContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
