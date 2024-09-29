import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { store } from "data";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import MainRoutes from "routes";
import AddLabDialog from "shared/components/Dialogs/AddLabDialog";
import { SnackBar } from "shared/components/SnackBar";
import { IndexStyles } from "styles/app-styles";
import { globalStyle, theme } from "styles/global-styles";
import "./global";
import "./globalStyle.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyle} />
      <Typography component={"div"}>
        <IndexStyles>
          <AddLabDialog />
          <SnackBar />
          <MainRoutes />
        </IndexStyles>
      </Typography>
    </ThemeProvider>
  </Provider>
);
