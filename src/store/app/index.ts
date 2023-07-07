import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { TAppState } from "./types";

const initialState: TAppState = {
  statusBarHeight: 0,
  passcode: null,
  isOnboardingPassed: false,
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
    setOnboardingPassed(state, action: PayloadAction<boolean>) {
      state.isOnboardingPassed = action.payload;
    },
  },
});

export const { setStatusBarHeight, setPasscode, setOnboardingPassed } = actions;

export default reducer;
