import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __deleteComment,
  __getComments,
  __updateComment,
} from "../redux/modules/commentsSlice";
import Button from "../element/button";

const Comments = ({ comment }) => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const fnDeleteCommentHandler = (commentId) => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteComment(commentId));
    } else {
      return;
    }
  };

  const onClickChangeHandler = (commentId) => {
    dispatch(__updateComment({ commentId, input }));
    setEdit(false);
  };

  return (
    <CommentBox key={comment.id}>
      <CommentAuthor>{comment.commentAuthor}</CommentAuthor>
      {!isEdit ? (
        <>
          <CommentBody>{comment.commentBody}</CommentBody>
          <Button onClick={() => setEdit(true)}>수정</Button>
        </>
      ) : (
        <>
          <StText
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></StText>
          <Button onClick={() => onClickChangeHandler(comment.id)}>저장</Button>
        </>
      )}
      <Button onClick={() => fnDeleteCommentHandler(comment.id)}>삭제</Button>
    </CommentBox>
  );
};

export default Comments;

const CommentBox = styled.div`
  margin: 20px 0px 0px 50px;
  overflow: scroll;
  display: flex;
`;
const CommentAuthor = styled.div`
  width: 50px;
`;
const CommentBody = styled.div`
  width: 700px;
  height: 30px;
`;

const StBtn = styled.button`
  border-radius: 15px;
`;

const StText = styled.textarea`
  height: 30px;
  width: 700px;
  background-color: transparent;
  border: 1px solid transparent;
`;
