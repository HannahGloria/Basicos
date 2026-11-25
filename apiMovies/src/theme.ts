import { alpha, createTheme } from "@mui/material/styles";

const lime = "#DEFA75";
const pink = "#FFA9D0";
const background = "#15111D";
const surface = "#221A2D";
const divider = "#473A52";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: lime, contrastText: background },
    secondary: { main: pink, contrastText: background },
    background: { default: background, paper: surface },
    text: { primary: "#F4F5FC", secondary: "#BEC4D8" },
    divider,
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", sans-serif',
    h5: { fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1,
      letterSpacing: "-0.055em", textTransform: "uppercase" },
    h6: { fontWeight: 650 },
    button: { textTransform: "none", fontWeight: 650 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `radial-gradient(ellipse at top right, ${alpha(pink, 0.09)}, transparent 36rem)`,
          backgroundRepeat: "no-repeat",
        },
        ":focus-visible": { outline: `2px solid ${pink}`, outlineOffset: 3 },
      },
    },
    MuiAppBar: {
      defaultProps: { color: "transparent", elevation: 0 },
      styleOverrides: {
        root: { backgroundColor: background, borderBottom: `1px solid ${divider}` },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 16 } },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "border-color 180ms, box-shadow 180ms",
          "&:hover, &:focus-within": {
            borderColor: alpha(lime, 0.6),
            boxShadow: `0 0 22px ${alpha(lime, 0.1)}`,
          },
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        },
      },
    },
  },
});
