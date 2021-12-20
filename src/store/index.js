import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import teachers from "./teachers";
import draftTeacher from "./draftTeacher";
import user from "./user";

const persistConfig = {
  key: "root",
  storage,
};

export const reducer = combineReducers({
  teachers,
  draftTeacher,
  user,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
