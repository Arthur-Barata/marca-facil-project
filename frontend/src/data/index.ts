import { configureStore } from "@reduxjs/toolkit";
import { useLocalSession } from "hooks/useLocalSession";
import { laboratorySlice } from "./laboratory";
import { ILaboratoryEntity } from "./laboratory/type";
import { reservationSlice } from "./reservation";
import { IReservationState } from "./reservation/types";
import { scheduleSlice } from "./schedule";
import { IScheduleState } from "./schedule/types";
import { snackbarSlice } from "./snackbar";
import { ISnackbarState } from "./snackbar/types";
import { IUserState, userSlice } from "./user";

export interface IStore {
  user: IUserState;
  snackbar: ISnackbarState;
  reservation: IReservationState;
  laboratory: ILaboratoryEntity;
  schedule: IScheduleState;
}
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    snackbar: snackbarSlice.reducer,
    reservation: reservationSlice.reducer,
    laboratory: laboratorySlice.reducer,
    schedule: scheduleSlice.reducer,
  },
  preloadedState: useLocalSession.loadStoreFromSessionStorage(),
});

store.subscribe(() => {
  useLocalSession.saveStateToSessionStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
