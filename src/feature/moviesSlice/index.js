import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const movieSlice = createSlice({
  name: "Movie Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovies(state, action) {
      state.movies.push(action.payload);
    },
    deleteMovie() {},
  },
});

const { addMovies, deleteMovie } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovies, deleteMovie };
export default moviesReducer;
