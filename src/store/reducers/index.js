import { combineReducers } from "redux";

import { teachersReducer } from "./teachers";
import { draftTeacherReducer } from "./draftTeacher";

export const reducer = combineReducers({
  teachers: teachersReducer,
  draftTeacher: draftTeacherReducer,
});
