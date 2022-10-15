import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getMovies } from '../redux/modules/moviesSlice';
import Movie from './Movie';


const MovieList = () => {
  const { isLoading, error, movies }= useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩 중 ... </div>
  }

  if (error) {
    return <div> {error.message} </div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movieData={movie} />
      ))}
    </div>
  );
};

export default MovieList;
