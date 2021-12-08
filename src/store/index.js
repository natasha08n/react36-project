import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import teachers from "./teachers";
import draftTeacher from "./draftTeacher";

export const reducer = combineReducers({
  teachers,
  draftTeacher,
});

export const store = configureStore({
  reducer
});
