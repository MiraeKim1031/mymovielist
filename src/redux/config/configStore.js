import { configureStore } from '@reduxjs/toolkit';
import movies from '../modules/moviesSlice';
import movie from '../modules/movieSlice';
import comments from '../modules/commentsSlice';

const store = configureStore({
   reducer: { movies: movies, movie: movie, comments: comments },
});

export default store;
