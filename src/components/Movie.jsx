import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __deleteMovies } from '../redux/modules/moviesSlice';

const Movie = ({ movieData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickDeleteHandler= () => {
        dispatch(__deleteMovies(movieData.id))
    };

    // const onClickChangeHandler= () => {
    //     dispatch(__completeMovies(movieData.id))
    // };

    return (
        <MovieBox>
            <AuthorAndButton>
                by. {movieData.author}
                <DeleteBtn onClick={onClickDeleteHandler}>
                    삭제
                </DeleteBtn>
            </AuthorAndButton>
            <div>
                <h3>{movieData.title}</h3>
                <span>{movieData.content}</span>
                {movieData.isDone}
            </div>
            <Btns>
                <Btn
                //  onclick={onClickChangeHandler}
                 >
                    {!movieData.isDone ? '감상 완료' : '감상 취소'}
                </Btn>
                <Btn
                    onClick={() => {
                        navigate(`/page/${movieData.id}`);
                    }}>
                    상세보기
                </Btn>
            </Btns>
        </MovieBox>
    );
};

export default Movie;

const MovieBox = styled.div`
    background-color: aliceblue;
    width: 250px;
    height: auto;
    border-radius: 15px;
    border: 2px solid black;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    box-sizing: content-box;
    overflow: hidden;
    padding: 20px 30px;
`;
const Btns = styled.div`
    display: flex;
    padding-top: 10px;
    gap: 10px;
`;

const AuthorAndButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Btn = styled.button`
    background-color: #c3caff;
    border-radius: 8px;
    height: 40px;
    width: 50%;
    border: 1px solid transparent;
    cursor: pointer;
`;

const DeleteBtn = styled.button`
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid blueviolet;
    cursor: pointer;
`;
