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
    updateMovies(state, action) {
      state.movies = action.payload;
    },
    deleteMovie() {},
  },
});

const { addMovies, updateMovies, deleteMovie } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovies, updateMovies, deleteMovie };
export default moviesReducer;
