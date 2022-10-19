import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __deleteComment,
  __getComments,
  __updateComment,
} from "../redux/modules/commentsSlice";

const Comments = ({ comment }) => {
  //console.log(id);
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
    // if (input.trim() === "") {
    //   return alert("텍스트를 입력하세요");
    // }
    //console.log({ ...comments });
    console.log(comment);
    dispatch(__updateComment({ ...comment, commentBody: input }));
    setEdit(false);
  };

  return (
    <div>
      <div key={comment.id}>
        <b>{comment.commentAuthor}</b> {comment.commentBody}
        <div>
          <button onClick={() => fnDeleteCommentHandler(comment.id)}>
            삭제하기
          </button>
          <div>
            {!isEdit ? (
              <div>
                {/* <div>{comment.commentBody}</div> */}
                <button onClick={() => setEdit(true)}>수정하기</button>
              </div>
            ) : (
              <div>
                <textarea
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                ></textarea>
                <button onClick={onClickChangeHandler}>저장하기</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
