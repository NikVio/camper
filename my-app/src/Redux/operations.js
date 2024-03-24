import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  deleteCamper,
  getCamper,
  paginationCamper,
  addCamper,
} from "../Services/axios";

export const favoriteCamper = createAsyncThunk(
  "favorite/fetchOne",
  async (_, thunkAPI) => {
    try {
      const data = await getCamper();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async (favorite, thunkAPI) => {
    try {
      const data = await addCamper(favorite);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletedCamper = createAsyncThunk(
  "favorite/deletedCamper",
  async (id, thunkAPI) => {
    try {
      const data = await deleteCamper(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const pageCamper = createAsyncThunk(
  "advert/pageCamper",
  async (item, thunkAPI) => {
    try {
      const data = await paginationCamper(item);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
