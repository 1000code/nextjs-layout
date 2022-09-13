import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./sevices/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
