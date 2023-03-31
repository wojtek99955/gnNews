import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "us",
};
export const currrentCountrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCurrentCountry: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentCountry } = currrentCountrySlice.actions;

export default currrentCountrySlice.reducer;
