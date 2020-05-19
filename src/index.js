import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppTheme from "./AppTheme";

ReactDOM.render(
  <React.StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>,
  document.getElementById("root")
);
