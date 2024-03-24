import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { advertReduser } from "./advertSlice";
import { favoriteReduser } from "./favoriteSlice";

const rootRedusers = combineReducers({
  advert: advertReduser,
  favorite: favoriteReduser,
});

export const store = configureStore({
  reducer: rootRedusers,
});
