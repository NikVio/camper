import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCamper,
  deleteCamper,
  getCamper,
  getCampers,
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
  async (_, thunkAPI) => {
    try {
      const data = await deleteCamper();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
