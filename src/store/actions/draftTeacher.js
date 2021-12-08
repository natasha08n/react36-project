import { createAction } from "@reduxjs/toolkit";

export const updateDraftTeacher = createAction(
  "UPDATE_DRAFT_TEACHER",
  (teacher) => ({
    payload: {
      ...teacher,
    },
  })
);
export const deleteDraftTeacher = createAction("DELETE_DRAFT_TEACHER");
