import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    userDetails: signUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;