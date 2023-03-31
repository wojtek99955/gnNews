import { configureStore } from "@reduxjs/toolkit";
import { newsApiSlice } from "../api/newsApiSlice";
import countryReducer from "../features/currentCountrySlice";
import articlesViewReducer from "../features/articlesView/articlesViewSlice";

export const store = configureStore({
  reducer: {
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    country: countryReducer,
    articlesView: articlesViewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApiSlice.middleware),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
