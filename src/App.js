import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./components/Header";
import BreweriesList from "./components/BreweriesList";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <BreweriesList />
    </ThemeProvider>
  );
}

export default App;
