import { createSlice } from "@reduxjs/toolkit";

import { addUser, clearUser } from "./operations/user";

const initialState = {
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
  },
});

export const { removeTeachers } = actions;
export default reducer;
