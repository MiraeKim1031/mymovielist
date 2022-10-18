import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   comments: [],
   isLoading: false,
   error: null,
};

export const __getComments = createAsyncThunk(
   'movies/getComments',
   async (_, thunkAPI) => {
      try {
         const data = await axios.get('http://localhost:3001/comments');
         return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const __addComment = createAsyncThunk(
   'movie/addComment',
   async (payload, thunkAPI) => {
      try {
         await axios.post('http://localhost:3001/comments', payload);
         return thunkAPI.fulfillWithValue(payload);
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const __getCommentById = createAsyncThunk(
   'movie/getComment',
   async (payload, thunkAPI) => {
      try {
         const data = await axios.get(
            `http://localhost:3001/comments?movieId=${payload}`
         );
         return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const commentsSlice = createSlice({
   name: 'comments',
   initialState,
   reducers: {},
   extraReducers: {
      [__getComments.pending]: (state) => {
         state.isLoading = true;
      },
      [__getComments.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.comments = action.payload;
      },
      [__getComments.pending]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      },
      [__addComment.pending]: (state) => {
         state.isLoading = true;
      },
      [__addComment.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.comments = [...state.comments, action.payload];
      },
      [__addComment.pending]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      },
      [__getCommentById.pending]: (state) => {
         state.isLoading = true;
      },
      [__getCommentById.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.comments = action.payload;
      },
      [__getCommentById.pending]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      },
   },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
