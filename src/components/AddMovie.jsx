import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    author: "",
    title: "",
    content: "",
  });

  const [movies, setMovies] = useState(null);

  const {
    register,
    formState: { errors },
    // handleSubmit,
    // setError,
  } = useForm({ mode: "onBlur" });

  const fetchmovies = async () => {
    const { data } = await axios.get("http://localhost:3001/movies");
    setMovies(data);
  };

  const onSubmitHandler = (movie) => {
    console.log(movie);
    axios.post("http://localhost:3001/movies", movie);
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  return (
    <StContainer>
      <StTitle>결심을 작성해 주세요!🔥</StTitle>
      <Stform
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitHandler(movie);
        }}
      >
        {/* 이름 */}
        <>
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
        </>
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
            {...register("content", {
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
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setMovie({
                ...movie,
                content: value,
              });
            }}
          />
          <Warn>{errors?.content?.message}</Warn>
          <Stbutton>입력하기</Stbutton>
        </Stwrap>
      </Stform>
    </StContainer>
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
const Stform = styled.section`
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
const Stbutton = styled.button`
  font-family: "ghanachoco";
  font-size: 17px;
  border: none;
  background-color: rgb(130, 176, 251);
  height: 60px;
  cursor: pointer;
  width: 150px;
  border-radius: 12px;
  color: white;
  margin-top: 50px;
  &:hover {
    background-color: #e8bda6;
    color: White;
  }
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
  margin-left: -200px;
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
