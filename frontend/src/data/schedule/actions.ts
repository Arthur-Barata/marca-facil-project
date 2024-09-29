import { store } from "data";
import { scheduleSlice } from ".";
import { IUserReservations } from "./types";

export const setDataSrc = (data: IUserReservations[]) => {
  store.dispatch(scheduleSlice.actions.setDataSrc(data));
};
