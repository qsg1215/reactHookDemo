import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/home";
import RenderProps from "../pages/renderProps/index";
import WarppedComponent from "../pages/warppedComponent/index";
import EmptyLayout from "../layouts/emptyLayout";
import StateHook from "../pages/hook/stateHook";
import EffectHook from "../pages/hook/effectHook";
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
            <li>
              <Link to="/hook">Hook</Link>
            </li>
            <ul>
              <li>
                <Link to="/hook/stateHook">stateHook</Link>
              </li>
              <li>
                <Link to="/hook/effectHook">effectHook</Link>
              </li>
            </ul>

            <li>
              <Link to="/hook1">Hook1</Link>
            </li>
            <ul>
              <li>
                <Link to="/hook1/stateHook1">stateHook</Link>
              </li>
              <li>
                <Link to="/hook1/effectHook1">effectHook</Link>
              </li>
            </ul>
          </ul>
        </nav>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/renderProps/" component={RenderProps} />
          <Route path="/warppedComponent/" component={WarppedComponent} />
          <Route path="/hook/" component={EmptyLayout} />
          <Switch>
            <Route exact path="/hook" component={StateHook} />
            <Route exact path="/hook/stateHook" component={StateHook} />
            <Route exact path="/hook/effectHook" component={EffectHook} />
          </Switch>

          <Route path="/hook1/" re component={EmptyLayout} />
          <Switch>
            <Route
              exact
              path="/hook1/stateHook1"
              component={() => <div>stateHook1</div>}
            />
            <Route
              exact
              path="/hook1/effectHook1"
              component={() => <div>effectHook1</div>}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
