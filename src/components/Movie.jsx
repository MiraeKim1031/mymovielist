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
  height: 110px;
  border-radius: 15px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  box-sizing: content-box;
  overflow: auto;
  padding: 15px 20px;
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
  width: 30px;
  margin-left: 10px;
`;

const Btn = styled.button`
  background-color: #d0d6ed;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 5px;
  border: 1px solid transparent;
`;
