import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const { actions, reducer } = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeacher: {
      reducer: (state, action) => {
        console.log("state, payload", state, action.payload.teacher);
        return [...state, action.payload.teacher];
      },
      prepare: (teacher) => ({ payload: { teacher } }),
    },
    deleteTeacher: (state, action) =>
      state.filter((i) => i.id !== action.payload.id),
    setTeachers: {
      reducer: (state, action) => [...state, ...action.payload.teachers],
      prepare: (teachers) => ({ payload: { teachers } }),
    },
    removeTeachers: () => initialState,
  },
});

export const { addTeacher, deleteTeacher, setTeachers, removeTeachers } =
  actions;
export default reducer;
