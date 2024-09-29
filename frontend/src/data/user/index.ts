import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserRoleEnum } from "shared/enums/user-role.enum";

export interface IUserState {
  loggedIn: boolean;
  name: string;
  role: UserRoleEnum | "";
  enrollment: string;
}

const initialState: IUserState = {
  name: "",
  loggedIn: false,
  role: "",
  enrollment: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
      return state;
    },
  },
});
