import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import BreweriesList from "./components/BreweriesList";

function App() {
  return (
    <Layout>
      <Header />
      <BreweriesList />
    </Layout>
  );
}

export default App;
