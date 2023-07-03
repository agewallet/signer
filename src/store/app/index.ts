import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { TAppState } from "./types";

const initialState: TAppState = {
  statusBarHeight: 0,
  passcode: null,
};

const { actions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStatusBarHeight(state, action: PayloadAction<number>) {
      state.statusBarHeight = action.payload;
    },
    setPasscode(state, action: PayloadAction<string>) {
      state.passcode = action.payload;
    },
  },
});

export const { setStatusBarHeight } = actions;

export default reducer;
