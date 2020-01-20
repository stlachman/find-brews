import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { customTheme } from "../theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
