import { createSlice } from "@reduxjs/toolkit";
import { pageCamper } from "./operations";

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
      .addCase(pageCamper.pending, handlePending)
      .addCase(pageCamper.fulfilled, (state, { payload }) => {
        state.items.push(...payload.item);
        state.page = payload.page;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(pageCamper.rejected, handleRejected);
  },
});

export const advertReduser = advertSlice.reducer;
