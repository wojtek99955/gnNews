import { configureStore } from "@reduxjs/toolkit";
import { newsApiSlice } from "../api/newsApiSlice";

export const store = configureStore({
  reducer: {
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApiSlice.middleware),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
