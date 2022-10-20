import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
   __deleteComment,
   __getComments,
   __updateComment,
} from '../redux/modules/commentsSlice';

const Comments = ({ comment }) => {
   const dispatch = useDispatch();
   const [isEdit, setEdit] = useState(false);
   const [input, setInput] = useState('');

   useEffect(() => {
      dispatch(__getComments());
   }, [dispatch]);

   const fnDeleteCommentHandler = (commentId) => {
      const result = window.confirm('정말로 삭제하시겠습니까?');
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
               <StBtn onClick={() => setEdit(true)}>수정</StBtn>
            </>
         ) : (
            <>
               <StText
                  value={input}
                  onChange={(e) => {
                     setInput(e.target.value);
                  }}></StText>
               <StBtn onClick={() => onClickChangeHandler(comment.id)}>
                  저장
               </StBtn>
            </>
         )}
         <StBtn onClick={() => fnDeleteCommentHandler(comment.id)}>삭제</StBtn>
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
   min-width: 100px;
   border-radius: 10px;
   background-color: aliceblue;
   margin-right: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const CommentBody = styled.div`
   min-width: 620px;
   height: 30px;
   background-color: aliceblue;
   margin-right: 50px;
   display: flex;
   align-items: center;
   padding-left: 10px;
   border-radius: 10px;
`;

const StBtn = styled.button`
   border-radius: 15px;
   background-color: cadetblue;
   border: 0px;
   min-width:80px;
   margin-left: 5px;
`;

const StText = styled.textarea`
   height: 30px;
   width: 700px;
   background-color: transparent;
   border: 1px solid transparent;
   width: 600px;
   height: 30px;
   background-color: aliceblue;
   margin-right: 50px;
   display: flex;
   align-items: center;
   padding-left: 10px;
   border-radius: 10px;
`;
