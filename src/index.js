import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Home from "./pages/home.jsx";
import RenderProps from "./pages/renderProps";
import WarppedComponent from "./pages/warppedComponent";

function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Home} />
        <Route path="about" component={RenderProps} />
        <Route path="inbox" component={WarppedComponent} />
      </Route>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
