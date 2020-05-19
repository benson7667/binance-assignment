import { theme } from "../constants/theme";

export const initialState = {
  currentTheme: theme.dark,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SWITCH_THEME": {
      const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
      return { ...state, currentTheme: theme[newThemeKey] };
    }
    default:
      return state;
  }
}
