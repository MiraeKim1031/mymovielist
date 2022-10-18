import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movie: [],
    isLoading: false,
    error: null,
};

export const __getMovie = createAsyncThunk( 
    'movie/getMovie',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`http://localhost:3001/movies/${payload}`);
            return thunkAPI.fulfillWithValue(data.data); 
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
    },
});

export const {} = MovieSlice.actions;
export default MovieSlice.reducer;