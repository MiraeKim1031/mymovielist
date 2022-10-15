import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {useState} from "react"
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const Page = () => {
    const {id} = useParams() 
    const [modal, setModal] = useState(false)
    const [movies, setMovies] = useState('')
    // axios.get('http://localhost:3001/movies')
    // .then((data)=>{console.log(data.data)})

    const fetchMovies = async() => {
        const {data} = await axios.get("http://localhost:3001/movies");
        setMovies(data)
        console.log(data)
    }

    useEffect(()=>{fetchMovies()},[])
    console.log(movies);




    return (
        <Layout>
            <div>Movie No.{movies[id-1]?.id}</div>
            <Wrap>
            <ContentWrap>
            <span>제목 : {movies[id-1]?.title}</span>
            <Content>{movies[id-1]?.content}</Content>
            </ContentWrap>
            <Btn>
            <button>이전으로</button>
            <button>수정하기</button>
            </Btn>
            </Wrap>
            <Comments onClick={()=>{setModal(true)}}>
                {modal ? "눌러서 댓글 내리기" :"눌러서 댓글 보기"}
             </Comments>
                {
                    modal === true ? <Modal setModal={setModal}/>: null
                 }
        </Layout>

    )
}

function Modal(props){
    return(
        <>
        <Comment>
            <InnerWrap>
            <div onClick={()=>props.setModal(false)}>내려서 댓글 내리기</div>
            <Text>
            <input type="text"></input>
            <input type="text"></input>
            <button>추가하기</button>
            </Text>
            </InnerWrap>
        </Comment>
        </>
    )
}

export default Page;



const Wrap  = styled.div`
    height: 100%;
    padding: 30px;
    align-items: center;
    justify-content: center;
    gap: 40px;
`
const ContentWrap  = styled.div`
text-align: center;
width: 50%;
margin: 0 auto;
`

const Content  = styled.div`
width: 100%;
height: 300px;
border: 3px solid cadetblue;
border-radius: 15px;
margin: 50px auto;
line-height: 300px;
`

const Btn  = styled.div`
width: 300px;
margin: 50px auto;
display: flex;
justify-content: space-between;
button{
width:90px; 
height:30px;  
border-radius: 10px;
}
`
const Comments  = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 40px;
`

const Comment = styled.div`
border-top: 1px solid cadetblue;
height: 200px;
position: absolute;
bottom: 0px;
left: 0px;
width: 100%;
background-color: white;
`

const InnerWrap = styled.div`
width: 1200px; 
margin: 0 auto;
`
const Text = styled.div`
    display: flex;

`

