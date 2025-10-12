import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./slice/screenSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});
