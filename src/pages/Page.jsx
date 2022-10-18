import React, { Children, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { __getMovie } from '../redux/modules/movieSlice';
import Comment from '../components/Comment';

const Page = () => {
   const { id } = useParams();
   const { isLoading, error, movie } = useSelector((state) => state.movie);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(__getMovie(id));
   }, [dispatch]);

   if (isLoading) {
      return <div> 로딩 중 ... </div>;
   }

   if (error) {
      return <div> {error.message} </div>;
   }

   return (
      <Layout>
         <PageContent>
            <div>
               <ContentFirstLine>Movie No. {movie.id}</ContentFirstLine>
               <h2>{movie.title}</h2>
               <p>{movie.body}</p>
               ✏️ {movie.author}
            </div>
            <div>
               <Btns>
                  <PageBtn>이전으로</PageBtn>
                  {movie.isDone === false ? <PageBtn>수정하기</PageBtn> : null}
               </Btns>
               <Comment>{Children}</Comment>
            </div>
         </PageContent>
      </Layout>
   );
};

export default Page;

const PageContent = styled.div`
   justify-content: space-between;
   display: flex;
   flex-direction: column;
   height: 500px;
`;

const ContentFirstLine = styled.div`
   font-size: 20px;
   color: #738cee;
   border-bottom: 1px solid #e2e2e2;
`;

const Btns = styled.div`
   display: flex;
   justify-content: center;
`;

const PageBtn = styled.button`
   background-color: #d0d6ed;
   width: auto;
   min-width: 200px;
   height: 40px;
   border-radius: 20px;
   cursor: pointer;
   font-size: 20px;
   border: 1px solid transparent;
   margin-bottom: 10px;
   margin-left: 10px;
`;

