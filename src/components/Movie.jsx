import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getMovie } from "../redux/modules/movieSlice";
import { __deleteMovies, __completeMovies } from "../redux/modules/moviesSlice";
import Button from "../element/button";

const Movie = ({ movieData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDeleteHandler = () => {
    dispatch(__deleteMovies(movieData.id));
  };

  const onClickChangeHandler = () => {
    dispatch(__completeMovies(movieData));
  };

  const onViewHandler = () => {
    navigate(`/page/${movieData.id}`);
  };

  return (
    <MovieBox>
      <UserInfo>
        ✏️{movieData.author}
        <h2>{movieData.title}</h2>
        <Lines>{movieData.body}</Lines>
      </UserInfo>
      <Btns>
        <Button size="sm" onClick={onClickDeleteHandler}>
          🗑
        </Button>
        <Button size="sm" onClick={onClickChangeHandler}>
          {!movieData.isDone ? "⬜️" : "☑️"}
        </Button>
        <Button size="sm" onClick={onViewHandler}>
          💬
        </Button>
      </Btns>
    </MovieBox>
  );
};

export default Movie;

const MovieBox = styled.div`
  background-color: transparent;
  width: 400px;
  height: 200x;
  border-radius: 15px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  box-sizing: content-box;
  overflow: auto;
  padding: 15px 20px;
  background: linear-gradient(#b8fae5, #fef2c1);
  box-shadow: 3px 3px 3px 3px #c3c3c3;
  border: 1px solid #eafffa;
  border-radius: 12px;
`;

const Lines = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserInfo = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  margin-left: 10px;
`;
