import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, deletedCamper, favoriteCamper } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(favoriteCamper.pending, handlePending)
      .addCase(favoriteCamper.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(favoriteCamper.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(deletedCamper.pending, handlePending)
      .addCase(deletedCamper.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletedCamper.rejected, handleRejected);
  },
});

export const favoriteReduser = favoriteSlice.reducer;
