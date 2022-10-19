import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addMovie, __getMovie } from "../redux/modules/movieSlice";
import Comment from "../components/Comment";

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState();
  const { isLoading, error, movie } = useSelector((state) => state.movie);
  console.log(movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMovie(id));
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>{error.mesasage}</div>;
  }

  const onClickChangeHandler = () => {
    if (input.trim() === "") {
      return alert("텍스트를 입력하세요");
    }
    dispatch(__addMovie({ ...movie, body: input }));
    setEdit(false);
  };

  console.log(movie);

  return (
    <Layout>
      <div>Movie No.{movie.id}</div>
      {isEdit ? (
        <Wrap>
          <ContentWrap>
            <span>제목 : {movie.title}</span>
            <Content>
              {!isEdit ? (
                <div>{movie.body}</div>
              ) : (
                <textarea
                  maxLength={200}
                  value={input}
                  placeholder={"내용을 입력해주세요"}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                ></textarea>
              )}
            </Content>
          </ContentWrap>
          <Btn>
            <button
              onClick={() => {
                navigate("/movies");
              }}
            >
              이전으로
            </button>
            <button onClick={onClickChangeHandler}>저장하기</button>
          </Btn>
        </Wrap>
      ) : (
        <Wrap>
          <ContentWrap>
            <span>제목 : {movie.title}</span>
            <Content>
              {!isEdit ? (
                <div>{movie.body}</div>
              ) : (
                <textarea
                  maxLength={200}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                ></textarea>
              )}
            </Content>
          </ContentWrap>
          <Btn>
            <button
              onClick={() => {
                navigate("/movies");
              }}
            >
              이전으로
            </button>
            {movie.isDone === false ? (
              <button onClick={() => setEdit(true)}>수정하기</button>
            ) : null}
          </Btn>
        </Wrap>
      )}
      <Comment />
    </Layout>
  );
};

export default Page;

const Wrap = styled.div`
  height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const ContentWrap = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 300px;
  border: 3px solid cadetblue;
  border-radius: 15px;
  margin: 50px auto;
  > div {
    height: 100%;
  }
  > textArea {
    border: none;
    width: 96%;
    height: 99%;
    border-radius: 15px;
  }
`;

const Btn = styled.div`
  width: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  button {
    width: 90px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
