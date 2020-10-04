import React from "react";
import { About, Layout, Main, HireMe } from "./components";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Layout>
          <Route path="/about" component={About} />
          <Route path="/hire_me" component={HireMe} />
          <Route exact path={["/", "/recipes/:id"]} component={Main} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
