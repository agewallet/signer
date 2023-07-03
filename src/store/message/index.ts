import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "message",
  initialState: {
    message: "Initial message",
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = actions;

export default reducer;
