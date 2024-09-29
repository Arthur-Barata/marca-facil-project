import { store } from "data";
import { reservationSlice } from ".";
import { CreateReservation } from "./types";

export const SetReservation = (payload: CreateReservation) => {
  store.dispatch(reservationSlice.actions.addReservation(payload));
};

export const SetReservationId = (payload: string) => {
  store.dispatch(reservationSlice.actions.setReservationId(payload));
};
