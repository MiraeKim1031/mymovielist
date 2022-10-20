import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require("dotenv").config();

const initialState = {
  movie: [],
  isLoading: false,
  error: null,
};

export const __getMovie = createAsyncThunk(
  "movie/getMovie",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_HEROKU}/movies/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addMovieThunk = createAsyncThunk(
  "movie/addMovie",
  async (payload, thunkAPI) => {
    try {
      axios.post(`${process.env.REACT_APP_HEROKU}/movies`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addMovie = createAsyncThunk(
  "movie/addMovie",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_HEROKU}/movies/${payload.id}`,
        {
          body: payload.body,
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movie = action.payload;
    },
    [__getMovie.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addMovieThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMovieThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [__addMovieThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.movie = action.payload;
    },
    [__addMovie.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = MovieSlice.actions;
export default MovieSlice.reducer;
