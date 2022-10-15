import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/moviesSlice";


const store = configureStore({
    reducer: { movies },
});

export default store;