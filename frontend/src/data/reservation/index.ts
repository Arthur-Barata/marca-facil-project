import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reservationInitialState } from "./state";
import { CreateReservation } from "./types";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: reservationInitialState,
  reducers: {
    addReservation: (state, action: PayloadAction<CreateReservation>) => {
      state.createReservations.push(action.payload);
    },
    setReservationId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { addReservation, setReservationId } = reservationSlice.actions;

export default reservationSlice.reducer;
