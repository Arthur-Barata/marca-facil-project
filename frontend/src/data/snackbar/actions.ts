import { AlertColor } from "@mui/material";
import { store } from "data";
import { snackbarSlice } from ".";

export const showSnackbar = (
  title: string,
  severity: AlertColor,
  error: boolean
) => {
  store.dispatch(
    snackbarSlice.actions.showSnackbar({ title, severity, error })
  );
};

export const hideSnackbar = () => {
  store.dispatch(snackbarSlice.actions.hideSnackbar());
};
