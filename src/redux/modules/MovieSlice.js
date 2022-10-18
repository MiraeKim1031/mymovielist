import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    movie: [],
    isLoading: false,
    error: null,
};

export const __getMovie = createAsyncThunk(
    'movie/getMovie',
    async (payload, thunkAPI) => {
        try {
            console.log(payload)
            const data = await axios.get(`http://localhost:3001/movies/${payload}`)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

export const __addMovie = createAsyncThunk(
    'movie/addMovie',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const data = await axios.patch(`http://localhost:3001/movies/${payload.id}`, { body: payload.body })
            return thunkAPI.fulfillWithValue(data.data)
            //thunkAPI 찾아보기. try(성공했을때 ) 쓸때 써라 
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
// 어씽크 어웨잇 쌍쌍으로 
// promise 
//pending
//fulfilled
//reject 
//객체화



const MovieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: {
        [__getMovie.pending]: (state) => {
            state.isLoading = true;
            //pending 진행중
        },
        [__getMovie.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload)
            state.movie = action.payload
            //서버로 부터 응답값 성공한 거 리덕스에 집어넣느다
            //
        },
        [__getMovie.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
            //거절. 에
            //기회가 되면 비동기 논블로킹 
        },
        [__addMovie.pending]: (state) => {
            state.isLoading = true;
        },
        [__addMovie.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload)
            state.movie = action.payload

        },
        [__addMovie.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }

    }
})

export const { } = MovieSlice.actions
export default MovieSlice.reducer