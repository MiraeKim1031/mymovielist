import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __deleteMovies, __completeMovies } from '../redux/modules/MoviesSlice';

const Movie = ({ movieData }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onClickDeleteHandler = () => {
      dispatch(__deleteMovies(movieData.id));
   };

   const onClickChangeHandler = () => {
      dispatch(__completeMovies(movieData));
   };

   return (
      <MovieBox>
         <div>
            ✏️{movieData.author}
            <h2>{movieData.title}</h2>
            <span>{movieData.body}</span>
         </div>
         <Btns>
            <Btn onClick={onClickDeleteHandler}>🗑</Btn>
            <Btn onClick={onClickChangeHandler}>
               {!movieData.isDone ? '⬜️' : '☑️'}
            </Btn>
            <Btn onClick={() => {navigate(`/page/${movieData.id}`);}}>
                💬
            </Btn>
         </Btns>
      </MovieBox>
   );
};

export default Movie;

const MovieBox = styled.div`
   background-color: transparent;
   width: 450px;
   height: auto;
   border-radius: 15px;
   border: 2px solid black;
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;
   box-sizing: content-box;
   overflow: hidden;
   padding: 15px 20px;
`;
const Btns = styled.div`
    width: 30px;
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


