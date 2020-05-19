import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primaryColor: "#212833",
  accentColor: "#f0b90b",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;

const AppTheme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

export default AppTheme;
