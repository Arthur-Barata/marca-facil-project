import { ptBR } from "@mui/material/locale";
import { alpha, createTheme } from "@mui/material/styles";
import { Montserrat } from "./common";

export const globalStyle = {
  typography: {
    fontFamily: "Montserrat",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Montserrat",
          src: `local('Montserrat'), url(${Montserrat}) format('woff2')`,
        },
      },
      fallbacks: [
        {
          "@font-face": {
            fontFamily: "Montserrat",
            fontWeight: 400,
            src: `local('Montserrat'), url(${Montserrat}) format('woff2')`,
          },
        },
      ],
    },
  },
};

export const theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        ms: 0,
      },
    },
    palette: {
      common: {
        white: "#ffffff",
        black: "#000000",
      },
      background: {
        default: "#00000099",
      },
      primary: {
        light: "#244B63",
        main: "#1F3F5E",
        dark: "#0F2D4A",
        contrastText: "#FCFBFB",
        50: "#072140",
        100: "#001429",
      },
      secondary: {
        light: "#BAC9D6",
        main: "#9BAEBC",
        dark: "#7B92A6",
        contrastText: "#001E2E",
      },
      info: {
        light: "#FFFFFF",
        main: "#FBFBFB",
        dark: "#F0F0F0",
        contrastText: "#001E2E",
      },
      details: {
        light: "#C3E7FF",
        main: "#90C0EB",
        dark: "#2B9ACE",
        contrastText: "#001E2E",
      },
      tertiary: {
        light: "#FF6E67",
        main: "#ff554d",
        dark: "#D94841",
        contrastText: "#FCFBFB",
      },
      green: {
        light: "#77F8DE",
        main: "#58DBC3",
        dark: "#33BFA7",
        contrastText: "#FCFBFB",
      },
      orange: {
        light: "#FFB685",
        main: "#FF8D34",
        dark: "#E07318",
        contrastText: "#FCFBFB",
      },
      warning: {
        main: "#ffb684",
      },
      error: {
        light: "#EC928E",
        main: "#E46962",
        dark: "#DC362E",
      },
      blue: {
        light: "#E3F3FF",
        dark: "#001D38",
        main: "#2D69AE",
        contrastText: "#FFFFFF",
      },
      gradient: {
        100: `linear-gradient(45deg, #FF554D, #FFBA8F)`,
        200: `linear-gradient(#001429,#001429)`,
        300: `linear-gradient(90deg, transparent 0%, ${alpha("#072140", 0.7)} 20%, #072140 40%)`,
        400: `linear-gradient(-90deg, transparent 0%, ${alpha("#072140", 0.7)} 30%, #072140 50%)`,
        500: `linear-gradient(#1F3F5E,#1F3F5E)`,
        600: `linear-gradient(45deg, #062341,#031B35)`,
        700: `linear-gradient(#0F2D4A,#0F2D4A)`,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.5rem",
              backgroundColor: "#0F2D4A",
            },
            WebkitTapHighlightColor: "transparent",
            WebkitUserSelect: "none",
            KhtmlUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          },
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            backgroundColor: "#FFFFFF",
          },
          input: {
            autofill: {
              border: "3px solid darkorange",
            },
            WebkitAutofill: {
              border: "3px solid darkorange",
            },
          },
        },
      },
    },
  },
  ptBR
);
