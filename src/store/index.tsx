import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Reducers
import appReducer from "./app";

const rootReducer = combineReducers({
  app: appReducer,
});

export const persistedReducer = persistReducer(
  {
    storage: AsyncStorage,
    key: "root",
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
