import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import BreweriesList from "./components/BreweriesList";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/">
            <BreweriesList />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
