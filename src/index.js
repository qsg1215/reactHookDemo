import React from "react";
import AppRouter from "./router/index";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./global.css";
const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, rootElement);
