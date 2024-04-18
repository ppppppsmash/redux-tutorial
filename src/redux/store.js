import { configureStore } from "@reduxjs/toolkit";

// ↓ counterSlice.reducer
import counterReducer from "./counterSlice";

// 状態
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})