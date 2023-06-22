import { createSlice } from "@reduxjs/toolkit";
const initialState = { movies: [1, 2, 3, 4] };
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default movieSlice.reducer;
