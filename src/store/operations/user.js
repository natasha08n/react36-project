import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addUser as addUserAPI,
  clearUser as clearUserAPI,
  registerUser as registerUserAPI,
  logout as logoutAPI,
} from "../../api/user";
import { getToken } from "../selectors/user";

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const data = await addUserAPI(user);

  return data;
});

export const clearUser = createAsyncThunk("users/clearUser", async () => {
  const data = await clearUserAPI();

  return data;
});

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user) => {
    const data = await registerUserAPI(user);

    return data;
  }
);

export const logout = createAsyncThunk(
  "users/logout",
  async (user, { getState }) => {
    const token = getToken(getState());
    const data = await logoutAPI(token);

    return data;
  }
);
