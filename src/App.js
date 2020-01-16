import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import BreweriesList from "./components/BreweriesList";
import Brewery from "./components/Brewery";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/brewers/:id">
            <Brewery />
          </Route>
          <Route path="/">
            <BreweriesList />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
