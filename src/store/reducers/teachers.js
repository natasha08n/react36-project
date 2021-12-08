import { createReducer } from "@reduxjs/toolkit";

import {
  addTeacher,
  deleteTeacher,
  setTeachers,
  removeTeachers,
} from "../actions/teachers";

const DEFAULT_STATE = [];

export const teachersReducer = createReducer(DEFAULT_STATE, {
  [addTeacher.type]: (state, action) => [...state, action.payload.teacher],
  [deleteTeacher.type]: (state, action) =>
    state.filter((i) => i.id !== action.payload.id),
  [setTeachers.type]: (state, action) => [...state, ...action.payload.teachers],
  [removeTeachers.type]: () => DEFAULT_STATE,
});
