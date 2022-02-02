import React from 'react';
import styled from 'styled-components';
import { NormalText, Title } from './Texts';

function Header() {
    return (
        <Container>
            <Title>들어온 요청</Title>
            <NormalText>파트너님에게 딱 맞는 요청서를 찾아보세요.</NormalText>
        </Container>
    );
}

const Container = styled.header`
    margin-top:40px;
    margin-bottom:32px;
`



export default Header;