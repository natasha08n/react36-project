import { createAction } from "@reduxjs/toolkit";

export const addTeacher = createAction("ADD_TEACHER", (teacher) => ({
  payload: {
    teacher,
  },
}));
export const deleteTeacher = createAction("DELETE_TEACHER", (id) => ({
  payload: {
    id,
  },
}));
export const setTeachers = createAction("SET_TEACHERS", (teachers) => ({
  payload: {
    teachers,
  },
}));
export const removeTeachers = createAction("REMOVE_TEACHERS");
