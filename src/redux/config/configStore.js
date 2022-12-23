import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../modules/boardSlice";

const store = configureStore({
  reducer: { boardSlice: boardSlice },
});

export default store;
