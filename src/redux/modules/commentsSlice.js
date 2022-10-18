import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "movies/getComments",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "movie/addComment",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.post("http://localhost:3001/comments/", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCommentById = createAsyncThunk(
  "movie/getComment",
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

//삭제
export const __deleteComment = createAsyncThunk(
  "movie/deleteComment",
  async (payload, thunkAPI) => {
    try {
      console.log("삭제할거야ㅐ" + payload);

      //await axios.delete(`http://localhost:3001/comments?id=${payload}`);
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
//수정
export const __updateComment = createAsyncThunk(
  "movie/updateComment",
  async (payload, thunkAPI) => {
    try {
      axios.patch(`http://localhost:3001/comments?movieId=${payload}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
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
      //pending 진행중
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
      //서버로 부터 응답값 성공한 거 리덕스에 집어넣느다
      //
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getCommentById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getCommentById.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const tpayloadet = state.data.filter(
        (comment) => comment.id === action.payload
      );
      state.data.splice(tpayloadet, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
    },
    [__updateComment.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
