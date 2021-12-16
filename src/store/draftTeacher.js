import { createSlice } from "@reduxjs/toolkit";

import { addTeacher } from "./operations/teachers";

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
  },
  extraReducers: (builder) => {
    builder.addCase(addTeacher.fulfilled, () => initialState);
  },
});

export const { updateDraftTeacher, deleteDraftTeacher } = actions;
export default reducer;
