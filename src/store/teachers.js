import { createSlice } from "@reduxjs/toolkit";

import {
  fetchTeachers,
  addTeacher,
  deleteTeacher,
} from "./operations/teachers";

const initialState = { items: [], loading: false };

const { actions, reducer } = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    removeTeachers: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTeacher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTeacher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(addTeacher.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
      state.loading = false;
    });
    builder.addCase(deleteTeacher.fulfilled, (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.loading = false;
    });
  },
});

export const { removeTeachers } = actions;
export default reducer;
