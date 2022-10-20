import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const Header = () => {
   const navigate = useNavigate();

   return (
      <HeaderContainer>
         <GlobalStyle />
         영화 볼 결심
         <HomeButton
            onClick={() => {
               navigate('/');
            }}>
            🏠
         </HomeButton>
      </HeaderContainer>
   );
};

export default Header;

const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
}`;

const HeaderContainer = styled.div`
   background-color: cadetblue;
   height: 40px;
   padding: 5px;
   margin-bottom: 50px;
   display: flex;
   justify-content: space-between;
   font-size: 30px;
   padding: 20px;
`;

const HomeButton = styled.div`
   background-color: transparent;
   cursor: pointer;
`;
