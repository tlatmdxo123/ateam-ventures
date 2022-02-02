import React from 'react';
import styled from 'styled-components';

interface Props{
    message:string,
}

function Error({message}:Props) {
    return (
        <Container>
            <Message>Error! {message}</Message>
        </Container>
    );
}

const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Message = styled.h1`

`

export default Error;