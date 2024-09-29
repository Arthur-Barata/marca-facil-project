import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { scheduleInitialState } from "./state";
import { IUserReservations } from "./types";

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: scheduleInitialState,
  reducers: {
    setDataSrc: (state, action: PayloadAction<IUserReservations[]>) => {
      state.dataSrc = action.payload;
      return state;
    },
  },
});
