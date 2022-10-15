// src/App.jsx

import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const AddMovie1 = () => {
  // 새롭게 생성하는 movie를 관리하는 state
  const [movie, setMovie] = useState({
    author: "",
    title: "",
    content: "",
  });

  const [movies, setMovies] = useState(null);

  const fetchmovies = async () => {
    const { data } = await axios.get("http://localhost:3001/movies");
    setMovies(data);
  };

  const onSubmitHandler = (movie) => {
    axios.post("http://localhost:3001/movies", movie);
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitHandler(movie);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMovie({
              ...movie,
              author: value,
            });
          }}
        />
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMovie({
              ...movie,
              title: value,
            });
          }}
        />
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setMovie({
              ...movie,
              content: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {movies?.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </>
  );
};

export default AddMovie1;
