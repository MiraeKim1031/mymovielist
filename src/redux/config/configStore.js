import { configureStore } from '@reduxjs/toolkit';
import movies from '../modules/MoviesSlice';
import movie from '../modules/MovieSlice';
const store = configureStore({
   reducer: { movies: movies, movie: movie },
});

export default store;
