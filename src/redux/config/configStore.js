import { configureStore } from '@reduxjs/toolkit';
import movies from '../modules/MoviesSlice';

const store = configureStore({
   reducer: { movies: movies },
});

export default store;
