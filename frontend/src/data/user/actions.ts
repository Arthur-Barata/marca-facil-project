import { store } from "data";
import { IUserState, userSlice } from ".";

export const setUserData = (payload: IUserState) => {
  store.dispatch(userSlice.actions.setUserData(payload));
};
