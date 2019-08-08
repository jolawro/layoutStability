export const darkTheme = {
  base: {
    primary: "#E4EAF0",
    secondary: "#BEC8D2",
    tertiary: "#A2ADB8",
    quaternary: "#808C97",
    subtle: "#252D34"
  },
  bg: {
    primary: "#0C0F11",
    secondary: "#111519",
    tertiary: "#1A2127",
    quaternary: "#212A32"
  }
};

export const lightTheme = {
  base: {
    primary: "#0B1823",
    secondary: "#45505B",
    tertiary: "#7C8A9B",
    quaternary: "#BAC6D5",
    subtle: "#D5DDE7"
  },
  bg: {
    primary: "#EFF1F3",
    secondary: "#E4EAF0",
    tertiary: "#ffffff",
    quaternary: "#DDE5ED"
  }
};

export const THEMES = {
  dark: darkTheme,
  light: lightTheme
};

const base = colorProp => props => props.theme.base[colorProp];

const bg = colorProp => props => props.theme.bg[colorProp];

export const fromTheme = {
  base,
  bg
};

export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  navy: "#000558",
  pink: "#ffa2cb",
  yellow: "#ffffcc",
  deepPurple: "#1d001f",
  blue: "#b8eae6"
};
