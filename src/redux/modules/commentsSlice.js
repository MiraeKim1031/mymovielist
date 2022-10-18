import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};

export const __addComment = createAsyncThunk(
    "movie/addComment",
    async (payload, thunkAPI) => {
        try {
            console.log(payload)
            await axios.post('http://localhost:3001/comments/', payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const commnetsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [__addComment.pending]: (state) => {
            state.isLoading = true;
            //pending 진행중
        },
        [__addComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload)
            state.comments = [...state.comments, action.payload]
            //서버로 부터 응답값 성공한 거 리덕스에 집어넣느다
            //
        },
        [__addComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})


