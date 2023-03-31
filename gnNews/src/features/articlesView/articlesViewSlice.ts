import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "grid",
};
export const articlesViewSlice = createSlice({
  name: "articlesView",
  initialState,
  reducers: {
    setArticlesView: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setArticlesView } = articlesViewSlice.actions;

export default articlesViewSlice.reducer;
