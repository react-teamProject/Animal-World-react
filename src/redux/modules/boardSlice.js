import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  board: [
    {
      id: "",
      boardTitle: "",
      boardContent: "",
      boardPW: "",
      boardUser: "",
      comment: [
        {
          id: "",
          commentContent: "",
          commentPW: "",
          commentUser: "",
        },
      ],
    },
  ],
};

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

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default boardSlice.reducer;
