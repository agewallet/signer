import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { TWalletState } from "./types";

const initialState: TWalletState = {
  mnemonic: "",
};

const { actions, reducer } = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setMnemonic(state, action: PayloadAction<string>) {
      state.mnemonic = action.payload;
    },
  },
});

export const { setMnemonic } = actions;

export default reducer;
