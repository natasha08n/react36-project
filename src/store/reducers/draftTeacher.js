import { createReducer } from "@reduxjs/toolkit";

import {
  updateDraftTeacher,
  deleteDraftTeacher,
} from "../actions/draftTeacher";

const DEFAULT_STATE = {
  name: "",
  surname: "",
  description: "",
};

export const draftTeacherReducer = createReducer(DEFAULT_STATE, {
  [updateDraftTeacher]: (state, action) => {
    console.log(action.payload);
    return { ...state, ...action.payload };
  },
  [deleteDraftTeacher]: DEFAULT_STATE,
});
