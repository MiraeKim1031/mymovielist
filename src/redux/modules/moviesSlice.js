import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    movies: [],
    isLoading: false,
    error: null,
};

export const __getMovies = createAsyncThunk(
    'movies/getMovies',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://localhost:3001/movies');
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __deleteMovies = createAsyncThunk(
    'movies/deleteMovies',
    async (payload, thunkAPI) => {
        try {
            axios.delete(`http://localhost:3001/movies/${payload}`);
            return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __completeMovies = createAsyncThunk(
    'movies/completeMovies',
    async(payload, thunkAPI) => {
        try {
            axios.patch(`http://localhost:3001/movies/${payload.id}`, {isDone: !payload.isDone});
            return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
    }}
)  

const MoviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [__getMovies.pending]: (state) => {
            state.isLoading = true;
        },
        [__getMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload
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
            state.movies = state.movies.filter((movie)=> movie.id !== action.payload)
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
            state.movies = state.movies.map((movie)=> movie.id === action.payload.id ? {...movie, isDone: ! movie.isDone} : movie); 
        },
        [__completeMovies.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = MoviesSlice.actions;
export default MoviesSlice.reducer;
