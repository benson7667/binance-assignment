import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primaryColor: "#16191d",
  accentColor: "#f0b90b",
  scaffoldBackgroundColor: "#3c3c3c",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
      background-color: ${(props) => props.theme.scaffoldBackgroundColor}
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
