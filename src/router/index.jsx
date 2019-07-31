import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import RenderProps from "../pages/renderProps/index";
import WarppedComponent from "../pages/warppedComponent/index";
import "./index.css";

function AppRouter() {
  return (
    <Router>
      <div className={"main"}>
        <nav>
          <ul>
            <li>
              <Link to="/">主页</Link>
            </li>
            <li>
              <Link to="/renderProps/">渲染形组件</Link>
            </li>
            <li>
              <Link to="/warppedComponent/">高阶组件</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/renderProps/" component={RenderProps} />
          <Route path="/warppedComponent/" component={WarppedComponent} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
