import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  updatedComment: [],
  isLoading: false,
  error: null,
};

export const __getMovies = createAsyncThunk(
  "movies/getMovies",
  async (payload, thunkAPI) => {
    try {
      console.log("*********여기는겟무비");
      //agile-bastion-29157.herokuapp.com
      //const data = await axios.get(`${process.env.REACT_APP_HEROKU}/movies`);
      const data = await axios.get(
        "https://agile-bastion-29157.herokuapp.com/movies"
      );

      https: return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteMovies = createAsyncThunk(
  "movies/deleteMovies",
  async (payload, thunkAPI) => {
    try {
      axios.delete(`${process.env.REACT_APP_HEROKU}/movies/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __completeMovies = createAsyncThunk(
  "movies/completeMovies",
  async (payload, thunkAPI) => {
    try {
      axios.patch(`${process.env.REACT_APP_HEROKU}/movies/${payload.id}`, {
        isDone: !payload.isDone,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [__getMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    [__deleteMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__completeMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__completeMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = state.movies.map((movie) =>
        movie.id === action.payload.id
          ? { ...movie, isDone: !movie.isDone }
          : movie
      );
    },
    [__completeMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = MoviesSlice.actions;
export default MoviesSlice.reducer;
