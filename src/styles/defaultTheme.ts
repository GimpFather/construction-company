import { createTheme } from "@mui/material";

const colors = {
  pastelPink: "#ffcad4",
  stormGray: "#696d7d",
  pastelWhite: "#FAF8F6",
  peach: "#ffe5d9",
  leafGreen: "#d8e2dc",
  pinkyRose: "#f4acb7",
  navyBlue: "#B8DAD9",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.pinkyRose,
    },
    secondary: {
      main: colors.pastelPink,
    },
    error: {
      main: colors.pinkyRose,
    },
    warning: {
      main: colors.peach,
    },
    info: {
      main: colors.navyBlue,
    },
    success: {
      main: colors.leafGreen,
    },
    common: {
      black: colors.stormGray,
      white: colors.pastelWhite,
    },
  },
});
