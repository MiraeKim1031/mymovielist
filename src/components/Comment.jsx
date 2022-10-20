import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment } from "../redux/modules/commentsSlice";
import Comments from "./Comments";
import { __getComments } from "../redux/modules/commentsSlice";
import { useSelector } from "react-redux";
import useLoading from "../hooks/useLoading";
import Button from "../element/button";

const Comment = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    movieId: id,
    commentAuthor: "",
    commentBody: "",
  };
  const [comment, setComment] = useState(initialState);

  const { isLoading, error, comments } = useSelector((state) => state.comments);
  useLoading(isLoading, error);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩 중 ... </div>;
  }

  if (error) {
    return <div> {error.message} </div>;
  }

  const commentOnsumitHandler = () => {
    dispatch(__addComment(comment));
    setComment(initialState);
  };

  return (
    <>
      <Wrap open={open}>
        <div
          className="innerDiv"
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          {open ? "눌러서 댓글 내리기" : "눌러서 댓글 보기"}
        </div>
        <div>
          <Btnbox>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                commentOnsumitHandler(comment);
              }}
            >
              <input
                value={comment.commentAuthor}
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
                value={comment.commentBody}
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
              <Button>추가하기</Button>
            </form>
          </Btnbox>
          {comments.map((comment) => (
            <div key={comment.id}>
              {+id === +comment.movieId ? <Comments comment={comment} /> : null}
            </div>
          ))}
        </div>
      </Wrap>
    </>
  );
};

export default Comment;

const Wrap = styled.div`
  width: 100%;
  background-color: white;
  height: ${({ open }) => (open ? "300px" : "30px")};
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 400ms ease-in-out;

  .innerDiv {
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
