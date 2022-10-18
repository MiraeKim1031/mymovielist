import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Comments from "./Comments";
import { __addComment } from "../redux/modules/commentsSlice";
import { useParams } from "react-router-dom";

const Comment = ({ children }) => {
  const { id } = useParams();
  const [commentOpen, setCommentOpen] = useState(false);
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    id: 0,
    movieId: id,
    commentAuthor: "",
    commentBody: "",
  });

  const onCommentSubmitHandler = () => {
    dispatch(__addComment(comment));
  };

  return (
    <CommentArea commentOpen={commentOpen}>
      <CommentBtn
        type="button"
        onClick={() => {
          setCommentOpen((commentOpen) => !commentOpen);
        }}
      >
        {commentOpen ? "눌러서 댓글 내리기" : "눌러서 댓글 보기"}
      </CommentBtn>
      <CommentAddForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCommentSubmitHandler(comment);
          }}
        >
          <input
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setComment({
                ...comment,
                commentAuthor: value,
              });
            }}
          />
          <input
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setComment({
                ...comment,
                commentBody: value,
              });
            }}
          />
          <button>추가</button>
        </form>
      </CommentAddForm>
      <Comments>{children}</Comments>
    </CommentArea>
  );
};

export default Comment;

const CommentArea = styled.div`
  height: ${({ commentOpen }) => (commentOpen ? "300px" : "50px")};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  transition: height 400ms ease-in-out;
  width: 90%;
  font-size: large;
  cursor: pointer;
  border-top: 1px solid #e2e2e2;
  padding: 10px;
`;

const CommentBtn = styled.div`
  height: 90px;
`;

const CommentAddForm = styled.div`
  height: -70px;
`;
