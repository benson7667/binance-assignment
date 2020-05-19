import React, { createContext, useReducer } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { initialState, reducer } from "./reducers/themeReducer";

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

export const ThemeContext = createContext();

const AppTheme = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ ...state, dispatch }}>
        <GlobalStyle />
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default AppTheme;
