import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  description: "",
};

const { actions, reducer } = createSlice({
  name: "draftTeacher",
  initialState,
  reducers: {
    updateDraftTeacher: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    deleteDraftTeacher: initialState,
  },
});

export const { updateDraftTeacher, deleteDraftTeacher } = actions;
export default reducer;
