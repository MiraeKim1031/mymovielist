import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment } from "../redux/modules/commentsSlice";
import {
  __getComments,
  __updateComment,
  __deleteComment,
} from "../redux/modules/commentsSlice";

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

  //여기부터 추가함

  //삭제기능 시작//
  const fnDeleteCommentHandler = () => {
    const commentID = 18;
    const result = window.confirm("정말로 삭제하시겠습니까?");
    if (result) {
      if (commentID == 18) {
        //const dispatch = useDispatch();
        dispatch(__deleteComment(commentID));
      }
    } else {
      return;
    }
  };
  //삭제기능 끝//

  //수정기능시작//

  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const onClickChangeHandler = () => {
    const commentID = 23;
    // if (input.trim() === "") {
    //   return alert("텍스트를 입력하세요");
    // }
    if (commentID == 23) {
      console.log({ ...comment });
      dispatch(
        __updateComment({ ...comment, commentBody: input, id: commentID })
      );
      setEdit(false);
    }
  };

  //수정기능끝//
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

          

          <div>
            {/* 삭제버튼 */}
            <button onClick={fnDeleteCommentHandler}>삭제하기</button>
            {/* 수정부분 시작 */}
            <div>
              {!isEdit ? (
                <div>
                  <div>{comment.commentBody}</div>
                  <button onClick={() => setEdit(true)}>수정하기</button>
                </div>
              ) : (
                <div>
                  <textarea
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  ></textarea>
                  <button onClick={onClickChangeHandler}>저장하기</button>
                </div>
              )}
            </div>

            {/* 수정부분 끝*/}
          </div>
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
