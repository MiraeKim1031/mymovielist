import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Wrap from "./Wrap";

const Layout = ({ children }) => {
    return (
        <>
            <PageLayout>
            <Header/>
            <Wrap>
            {children}
            </Wrap>
            </PageLayout>
        </>
    )
}

export default Layout;

const PageLayout = styled.div`
  min-width: 400px;
  height: 100%;
  margin: auto;
`
