import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Title>들어온 요청</Title>
            <Desc>파트너님에게 딱 맞는 요청서를 찾아보세요.</Desc>
        </Container>
    );
}

const Container = styled.header`
    margin-top:40px;
    margin-bottom:32px;
`

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSizes["xl"]};
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 600;
`
const Desc = styled.p`
    font-size: ${({theme}) => theme.fontSizes["m"]};
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 400;
`

export default Header;