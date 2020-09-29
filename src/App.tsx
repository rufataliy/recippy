import React from "react";
import { About, Layout, Main, HireMe } from "./components";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/hire_me" component={HireMe} />
      </Layout>
    </Router>
  );
}

export default App;
