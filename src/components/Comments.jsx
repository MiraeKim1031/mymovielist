import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getCommentById } from "../redux/modules/commentsSlice";

const Comments = ({ children }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comments);
  console.log(comments);

  useEffect(() => {
    dispatch(__getCommentById(id));
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩 중 ... </div>;
  }

  if (error) {
    return <div> {error.message} </div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <div key={comments.id}>
          <b>{comment.commentAuthor}</b> {comment.commentBody}
        </div>
      ))}
    </div>
  );
};

export default Comments;
