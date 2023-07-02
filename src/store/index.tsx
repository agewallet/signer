import {configureStore} from '@reduxjs/toolkit';

// Reducers
import messageReducer from './message';
import usersReducer from './users';

const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
