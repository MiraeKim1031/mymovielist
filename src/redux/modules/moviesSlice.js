import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __addMovie = createAsyncThunk(
  "movie/getMovie",
  async (payload, thunkAPI) => {
    try {
      axios.post("http://localhost:3001/movies", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//export const __addMovie = createAsyncThunk();
// export const addList = createAsyncThunk(
//   "ADD_MOVIE", async (data) => {
//   const response = await axios.post("http://localhost:3001/movies", data);
//   return response.data;
// });
// const fetchmovies = async () => {
//   const { data } = await axios.get("http://localhost:3001/movies");
//   setMovies(data);
// };

const initialState = {
  movies: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const AddSlice = createSlice({
  name: "addMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [__addMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = [...state.movies, action.payload];
    },
    [__addMovie.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = AddSlice.actions;
export default AddSlice.reducer;
