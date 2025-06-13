import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./assets/styles/global.scss";
import React from "react";
import "./assets/i18n/config";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
