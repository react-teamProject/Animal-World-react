import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* ver.1 Input에 title와 content만 추가 */
const initialState = {
  board: [
    {
      id: "",
      user: "",
      pw: "",
      boardTitle: "",
      boardContent: "",
      ImgUrl: "",
    },
  ],
  isLoading: false,
  error: null,
};

// boards 받아오기
export const __getBoards = createAsyncThunk(
  "board/getBoards",
  async (payload, thunkApi) => {
    try {
      const data = await axios.get("http://localhost:3001/board");
      return thunkApi.fulfillWithValue(data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// board 추가 (input에서 사용)
export const __postBoards = createAsyncThunk(
  "board/postBoards",
  async (payload, thunkApi) => {
    try {
      const data = await axios.post("http://localhost:3001/board", payload);
      return thunkApi.fulfillWithValue(data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// board 삭제 (boardItem에서 사용)
export const __deleteBoards = createAsyncThunk(
  "board/deteteBoards",
  async (payload, thunkApi) => {
    try {
      await axios.delete(`http://localhost:3001/board/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    // id 값 받아오기
    getBoardID: (state, action) => {
      return {
        ...state,
        board: state.board.find((board) => {
          return board.id === action.payload;
        }),
      };
    },
  },
  extraReducers: {
    [__getBoards.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__getBoards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postBoards.pending]: (state) => {
      state.isLoading = true;
    },
    [__postBoards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = [...state.board, action.payload];
    },
    [__postBoards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteBoards.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteBoards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = state.board.filter((del) => del.id !== action.payload);
    },
    [__deleteBoards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getBoardID } = boardSlice.actions;
export default boardSlice.reducer;
