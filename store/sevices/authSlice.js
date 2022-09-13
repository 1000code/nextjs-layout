import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  role: "",
  isLogin: false,
  userId: "",
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state, { payload }) => {
      state.name = payload.name;
      state.role = payload.role;
      state.userId = payload.userId;

      if (payload && payload.accessToken) {
        state.isLogin = true;
        sessionStorage.setItem(
          process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          payload.accessToken
        );
        sessionStorage.setItem(
          process.env.NEXT_PUBLIC_REFRESH_TOKEN,
          payload.refreshToken
        );
      }
    },
    handleLogout: (state) => {
      state.name = "";
      state.role = "";
      state.isLogin = false;
      state.userId = "";

      sessionStorage.removeItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN);
      sessionStorage.removeItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN);
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
