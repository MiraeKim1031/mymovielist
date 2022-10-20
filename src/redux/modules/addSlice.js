import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movie: [],
  isLoading: false,
  error: null,
};

export const __addMovie = createAsyncThunk(
  "movie/addMovie",
  (payload, thunkAPI) => {
    try {
      axios.post(`${process.env.REACT_APP_HEROKU}/movies`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AddSlice = createSlice({
  name: "addMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [__addMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMovie.pending]: (state, action) => {
      state.isLoading = false;
      state.movies = [...state.movies, action.payload];
    },
    [__addMovie.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = AddSlice.actions;
export default AddSlice.reducer;
