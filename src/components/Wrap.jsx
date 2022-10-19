import React from 'react';
import styled from 'styled-components';

const Wrap = ({ children }) => {
   return <BodyWrap>{children}</BodyWrap>;
};

export default Wrap;

const BodyWrap = styled.div`
   width: auto;
   margin: auto;
   align-items: center;
   justify-content: center;
   padding-left: 50px;
   padding-right: 50px;
`;
