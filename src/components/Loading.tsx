import React from 'react';
import styled,{keyframes} from 'styled-components';

function Loading() {
    return (
        <Container>
            <Ball/>
            <Ball/>
            <Ball/>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const smallBig = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(0.75);
  },
` 
const Ball = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left:3px;
    animation: 0.75s ${smallBig} 0s infinite linear;
    background: #2196f3;
    &:nth-child(2){
        animation-delay: -0.25s;
    }
    &:nth-child(3){
        animation-delay: -0.5s;
    }
`


export default Loading;