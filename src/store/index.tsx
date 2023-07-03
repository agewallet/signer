import { configureStore } from "@reduxjs/toolkit";

// Reducers
import appReducer from "./app";
import messageReducer from "./message";
import usersReducer from "./users";

const store = configureStore({
  reducer: {
    app: appReducer,
    message: messageReducer,
    users: usersReducer,
  },
  // https://dev.to/shreyvijayvargiya/react-native-redux-tool-kit-asyncstorage-210e
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
