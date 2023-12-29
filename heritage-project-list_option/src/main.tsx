import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./appRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <I18nextProvider i18n={i18next}>
    <AppRouter />
  </I18nextProvider>
);
