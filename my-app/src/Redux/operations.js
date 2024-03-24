import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  deleteCamper,
  getCamper,
  getCampers,
  paginationCamper,
} from "../Services/axios";

export const fetchCampers = createAsyncThunk(
  "advert/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await getCampers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "advert/fetchOne",
  async (_, thunkAPI) => {
    try {
      const data = await getCamper();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addCamper = createAsyncThunk(
//   "advert/addCamper",
//   async (_, thunkAPI) => {
//     try {
//       const data = await addCamper(favorite);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deletedCamper = createAsyncThunk(
  "advert/deletedCamper",
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
