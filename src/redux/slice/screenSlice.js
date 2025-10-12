import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    isVisibleTrue: (state) => {
      state.isVisible = true;
    },
    isVisibleFalse: (state) => {
      state.isVisible = false;
    },
  },
});

export const { isVisibleTrue, isVisibleFalse } = screenSlice.actions;
export default screenSlice.reducer;
