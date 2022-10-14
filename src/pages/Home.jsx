import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <font size="28"><center>보는구나, 마침내</center></font>
            <StContainer>
                <WriteBox onClick={()=>{navigate("/write");}}> 작성할 결심 </WriteBox>
                <MovieBox onClick={()=>{navigate("/movies");}}> 영화 List </MovieBox>
            </StContainer>
        </Layout>
    )
}

export default Home;

const StContainer = styled.div`
    height: 100%;
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const WriteBox = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 20px;
    border: 2px solid #ad5f27;
    text-align: center;
    
`

const MovieBox = styled.div`
    height: 400px;
    width: 400px;
    border: 2px solid #ad5f27;
    border-radius: 20px;
    text-align: center;
`
