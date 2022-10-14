import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer onClick={()=>{navigate("/");}}>
        <GlobalStyle />
            영화볼 결심
        </HeaderContainer>
    )
}

export default Header;

const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
}`

const HeaderContainer = styled.div`
    background-color: cadetblue;
    height: 100px;
    border-radius: 20px;
    padding: 5px;
    margin-bottom: 15px;
`