import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getTeachers,
  addTeacher as addTeacherAPI,
  deleteTeacher as deleteTeacherAPI,
} from "../../api/teachers";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (query) => {
    const data = await getTeachers(query);
    return data;
  }
);

export const addTeacher = createAsyncThunk(
  "teachers/addTeacher",
  async (teacher) => {
    const data = await addTeacherAPI(teacher);
    return data;
  }
);

export const deleteTeacher = createAsyncThunk(
  "teachers/deleteTeacher",
  async (id) => {
    await deleteTeacherAPI(id);
    return id;
  }
);
