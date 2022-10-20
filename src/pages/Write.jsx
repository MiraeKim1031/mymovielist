import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addMovieThunk } from "../redux/modules/movieSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Button from "../element/button";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    author: "",
    title: "",
    body: "",
    idDone: "false",
  });

  const onAddHandler = (movie) => {
    dispatch(__addMovieThunk(movie));
    navigate("/movies");
  };

  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <Layout>
      <StContainer>
        <StTitle>결심을 작성해주세요!🔥</StTitle>
        <Stform
          onSubmit={(event) => {
            event.preventDefault();
            onAddHandler(movie);
          }}
        >
          {/* 이름 */}
          <Stwrap>
            <Stlabel>이름</Stlabel>
            <Stinput
              {...register("author", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setMovie({
                  ...movie,
                  author: value,
                });
              }}
            />
            <Warn>{errors?.author?.message}</Warn>
          </Stwrap>
          {/* 제목 */}
          <Stwrap>
            <Stlabel>제목</Stlabel>
            <Stinput
              {...register("title", {
                required: "제목을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setMovie({
                  ...movie,
                  title: value,
                });
              }}
            />
            <Warn>{errors?.title?.message}</Warn>
          </Stwrap>
          {/* 내용 */}
          <Stwrap>
            <Stlabel>내용</Stlabel>
            <Stinputs
              {...register("body", {
                required: "내용을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setMovie({
                  ...movie,
                  body: value,
                });
              }}
            />
            <Warn>{errors?.body?.message}</Warn>
          </Stwrap>
          <Button size="lg">추가하기</Button>
        </Stform>
      </StContainer>
    </Layout>
  );
};

export default AddMovie;

const StContainer = styled.div`
  @font-face {
    font-family: "ghanachoco";
    src: url("https:cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Warn = styled.div`
  color: red;
  padding-left: 17px;
  font-size: 0.8rem;
  font-weight: 00;
  /* div + & {
    margin: 0.5rem 0 0.8rem;
  } */
  font-family: "ghanachoco";
  margin-top: 5px;
  margin-left: -180px;
`;
// const Stbutton = styled.button`
//   font-family: "ghanachoco";
//   font-size: 17px;
//   border: none;
//   background-color: #82b0fb;
//   height: 60px;
//   cursor: pointer;
//   width: 150px;
//   border-radius: 12px;
//   color: white;
//   margin-top: 50px;
//   &:hover {
//     background-color: #e8bda6;
//     color: White;
//   }
//`;
const Stform = styled.form`
  border-radius: 20px;
  border: 5px solid cadetblue;
  background-color: #def1ef;
  min-width: 400px;
  min-height: 600px;
  padding: 40px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Stinput = styled.input`
  font-family: "ghanachoco";
  padding-left: 10px;
  border: 1px solid #eee;
  height: 40px;
  width: 300px;
  border-radius: 12px;
  outline: none;
`;
const Stinputs = styled.input`
  font-family: "ghanachoco";
  padding-left: 10px;
  border: 1px solid #eee;
  height: 180px;
  width: 300px;
  border-radius: 12px;
  outline: none;
`;

const Stwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const Stlabel = styled.div`
  font-family: "ghanachoco";
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 260px;
`;
const StTitle = styled.div`
  font-family: "ghanachoco";
  font-size: 40px;
`;
