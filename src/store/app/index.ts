import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    statusBarHeight: 0,
  },
  reducers: {
    setStatusBarHeight(state, action: PayloadAction<number>) {
      state.statusBarHeight = action.payload;
    },
  },
});

export const { setStatusBarHeight } = actions;

export default reducer;
