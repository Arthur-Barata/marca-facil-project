import { AlertColor } from "@mui/material";

export interface ISnackbarState {
  error: boolean;
  title: string;
  severity: AlertColor;
}
