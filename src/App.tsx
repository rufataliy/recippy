import React from "react";
import { Layout, Main } from "./components";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/about">About</Route>
        <Route path="/contact">Hire me</Route>
      </Layout>
    </Router>
  );
}

export default App;
