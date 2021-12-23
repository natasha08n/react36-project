import { createSlice } from "@reduxjs/toolkit";

import { addUser, clearUser, registerUser, logout } from "./operations/user";

const initialState = {
  id: 0,
  username: "",
  email: "",
  token: "",
  isGoogleSigned: false,
  loading: false,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.name;
      state.email = action.payload.email;
      state.isGoogleSigned = action.payload.isGoogleSigned;
      // state.token =
      state.loading = false;
    });
    builder.addCase(clearUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(clearUser.fulfilled, (state, action) => {
      state.username = "";
      state.email = "";
      state.isGoogleSigned = false;
      // state.token =
      state.loading = false;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.username = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isGoogleSigned = false;
      state.loading = false;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.username = "";
      state.email = "";
      state.token = "";
      state.isGoogleSigned = false;
      state.loading = false;
    });
  },
});

export const { removeTeachers } = actions;
export default reducer;
