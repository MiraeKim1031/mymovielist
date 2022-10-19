import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment } from "../redux/modules/commentsSlice";
import Comments from "./Comments";

const Comment = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    id: 0,
    movieId: id,
    commentAuthor: "",
    commentBody: "",
  });

  const commentOnsumitHandler = () => {
    dispatch(__addComment(comment));
  };

  return (
    <>
      <Wrap open={open}>
        <div
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          {open ? "눌러서 댓글 내리기" : "눌러서 댓글 보기"}
        </div>
        <wrap>
          <Btnbox>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                commentOnsumitHandler(comment);
              }}
            >
              <input
                type="text"
                placeholder="이름"
                onChange={(e) => {
                  const { value } = e.target;
                  setComment({
                    ...comment,
                    commentAuthor: value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="내용"
                onChange={(e) => {
                  const { value } = e.target;
                  setComment({
                    ...comment,
                    commentBody: value,
                  });
                }}
              />
              <button>추가하기</button>
            </form>
          </Btnbox>
          <Comments></Comments>
        </wrap>
      </Wrap>
    </>
  );
};

export default Comment;

const Wrap = styled.div`
  width: 100%;
  background-color: white;
  height: ${({ open }) => (open ? "200px" : "30px")};
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 400ms ease-in-out;
  > div {
    position: fixed;
    width: 100%;
    background-color: cadetblue;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
  }
  overflow: scroll;
`;

const Btnbox = styled.div`
  form {
    display: flex;
    margin-top: 60px;
    justify-content: space-evenly;
  }
  input {
    border: 2px solid cadetblue;
    border-radius: 5px;
    height: 20px;
  }
  input:nth-child(2) {
    width: 400px;
  }
  input:focus {
    outline: none;
  }
  button {
    width: 200px;
    height: 26px;
    background-color: cadetblue;
    color: white;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    opacity: 0.8;
    color: black;
    cursor: pointer;
  }
`;
const Txt = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;
