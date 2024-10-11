import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30302f",
    },
    secondary: {
      main: "#939292",
    },
    error: {
      main: "#E94545",
    },
    space: "#f0f2f5",
    text: {
      secondary: "#00000099",
    },
    background: {
      main: "#F7F7F7",
    },
    disabled: {
      main: "#BDBDBD",
    },
    badge: {
      main: "#FF3434",
      contrastText: "white",
    },
    icon: {
      main: "white",
    },
  },
  spacing: 1,
  typography: {
    fontFamily: "Manrope, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 1,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: "4px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
  },
});

export default theme;
