import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "../theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
}
