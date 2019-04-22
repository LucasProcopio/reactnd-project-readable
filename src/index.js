import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.scss";
import { Footer } from "./components/Footer";

ReactDOM.render(
  <div>
    <App />
    <Footer />
  </div>,
  document.getElementById("root")
);
