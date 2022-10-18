import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMovies } from "../redux/modules/MoviesSlice";
import Movie from "./Movie";

const MovieList = () => {
  const { isLoading, error, movies } = useSelector((state) => state.movies);
  console.log(movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩 중 ... </div>;
  }

  if (error) {
    return <div> {error.message} </div>;
  }

  return (
    <Lists>
      <div>
        <h2>기대되는 영화⏱</h2>
        {movies.map(
          (movie) => !movie.isDone && <Movie key={movie.id} movieData={movie} />
        )}
      </div>
      <Center></Center>
      <div>
        <h2>감상 완료🌊</h2>
        {movies.map(
          (movie) => movie.isDone && <Movie key={movie.id} movieData={movie} />
        )}
      </div>
    </Lists>
  );
};

export default MovieList;

const Lists = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Center = styled.div`
  border: 1px solid #e2e2e2;
`;
