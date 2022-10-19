import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Home = () => {
   const navigate = useNavigate();

   return (
      <Layout>
         <FirstWords><h2>영화를 기록해볼까요?</h2></FirstWords>
         <StContainer>
            <MainBox
               onClick={() => {
                  navigate('/write');
               }}>
               <p>
                  📝
                  <br />
                  작성할 결심
               </p>
            </MainBox>
            <MainBox
               onClick={() => {
                  navigate('/movies');
               }}>
               <p>
                  🎥
                  <br />
                  영화 리스트
               </p>
            </MainBox>
         </StContainer>
      </Layout>
   );
};

export default Home;

const StContainer = styled.div`
   height: 100%;
   display: flex;
   padding: 30px;
   align-items: center;
   justify-content: center;
   gap: 40px;
   font-size: 30px;
   display: flex;
`;

const MainBox = styled.div`
   height: 300px;
   width: 400px;
   border-radius: 20px;
   border: 0.5px solid #97a8a3;
   text-align: center;
   cursor: pointer;
   background-color: #f8efe4;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #203148;
`;

const FirstWords = styled.div`
   margin-top: 60px;
   text-align: center;
`;
