import { createSlice } from "@reduxjs/toolkit";
import { deletedCamper, fetchCampers, pageCamper } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  page: 0,
  isLoading: false,
  error: null,
};

export const advertSlice = createSlice({
  name: "advert",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(deletedCamper.pending, handlePending)
      .addCase(deletedCamper.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletedCamper.rejected, handleRejected)
      .addCase(pageCamper.fulfilled, (state, { payload }) => {
        state.items.push(...payload.item);
        state.page = payload.page;
      });
  },
});

export const advertReduser = advertSlice.reducer;
