import React from 'react';
import styled from 'styled-components';

interface Props{
    value:string
}
function Warning({value}:Props) {
    return (
        <Container>
            {value}
        </Container>
    );
}

const Container = styled.div`
    padding: 2px 8px;
    border-radius: 12px;
    border:1px solid ${({theme}) => theme.colors.warning};
    color:${({theme}) => theme.colors.warning};
    font-weight: 500;
    font-size: 12px;
`

export default Warning;