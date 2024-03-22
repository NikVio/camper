import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { advertReduser } from "./advertSlice";

const rootRedusers = combineReducers({
  advert: advertReduser,
});

export const store = configureStore({
  reducer: rootRedusers,
});
