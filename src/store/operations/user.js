import { createAsyncThunk } from "@reduxjs/toolkit";

import { addUser as addUserAPI, clearUser as clearUserAPI } from "../../api/user";

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const data = await addUserAPI(user);
  return data;
});

export const clearUser = createAsyncThunk("users/clearUser", async () => {
  const data = await clearUserAPI();
  return data;
});
