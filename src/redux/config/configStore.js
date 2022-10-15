<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/moviesSlice";


const store = configureStore({
    reducer: { movies },
});

export default store;
=======
import { configureStore } from '@reduxjs/toolkit';
import movies from '../modules/MoviesSlice';

const store = configureStore({
   reducer: { movies: movies },
});

export default store;
>>>>>>> main
