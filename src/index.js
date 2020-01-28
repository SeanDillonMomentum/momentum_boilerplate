import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import App from "./App";
import "./styles.css";
import DefaultErrorBoundary from "./DefaultErrorBoundary";
import { ThemeProvider } from "styled-components";

const theme = {
  lightBlue: "#3cc7fa",
  midnightBlue: "#001649",
  lightSteelBlue: "#E3E9EE",
  momentumBlue: "#00aeef",
  slateGrey: "#6f7d8B",
  cadetBlue: "#658eb3",
  challengeGreen: "#49B54A",
  alertRed: "#FF0000",
  backgroundDarkGrey: "#f5f5f5",
  backgroundLightGrey: "#e5e5e5",
  font: "Roboto, sans-serif"
};

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </DefaultErrorBoundary>,
  document.getElementById("app")
);
