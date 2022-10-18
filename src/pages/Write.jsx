import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { __addMovie } from '../redux/modules/addSlice';

const Write = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [movie, setMovie] = useState({
      id: 0,
      author: '',
      title: '',
      body: '',
      isDone: false,
   });

   const onSumbitHandler = () => {
      dispatch(__addMovie(movie));
      navigate('/movies');
   };

   return (
      <Layout>
         <WriteContent
            onSubmit={(e) => {
               e.preventDefault();
               onSumbitHandler(movie);
            }}>
                <h2>작성자</h2>
            <input
               type='text'
               onChange={(ev) => {
                  const { value } = ev.target;
                  setMovie({
                     ...movie,
                     author: value,
                  });
               }}
            />
            <h2>제목</h2>
            <input
               type='text'
               onChange={(ev) => {
                  const { value } = ev.target;
                  setMovie({
                     ...movie,
                     title: value,
                  });
               }}
            />
            <h2>내용</h2>
            <txtarea
               onChange={(ev) => {
                  const { value } = ev.target;
                  setMovie({
                     ...movie,
                     body: value,
                  });
               }}
            />
            <button>추가하기</button>
         </WriteContent>
      </Layout>
   );
};

export default Write;


const WriteContent = styled.form`
   width: 600px;
   margin: auto;
   align-items: center;
   justify-content: center;
`;