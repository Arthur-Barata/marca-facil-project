import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { snackbarInitialState } from "./state";
import { ISnackbarState } from "./types";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: snackbarInitialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<ISnackbarState>) => {
      state = Object.assign(state, action.payload);
      return state;
    },
    hideSnackbar: (state) => {
      state = snackbarInitialState;
      return state;
    },
  },
});
