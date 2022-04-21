import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider, teamsTheme } from "@fluentui/react-northstar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider theme={teamsTheme}>
    <App />
  </Provider>
);
reportWebVitals();
