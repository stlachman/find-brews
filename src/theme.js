import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: '"Abril Fatface", Cursive',
    body: '"Poppins", Sans-Serif'
  }
};
