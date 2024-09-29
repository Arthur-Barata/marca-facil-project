import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ReactDOM from "react-dom/client";
import MainRoutes from "routes";
import { IndexStyles } from "styles/app-styles";
import { globalStyle, theme } from "styles/global-styles";
import "./global";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={globalStyle} />
    <Typography component={"div"}>
      <IndexStyles>
        <MainRoutes />
      </IndexStyles>
    </Typography>
  </ThemeProvider>
);
