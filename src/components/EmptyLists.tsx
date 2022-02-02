import React from 'react';
import styled from 'styled-components';

function EmptyLists() {
    return (
        <Container>
            <Message>조건에 맞는 견적 요청이 없습니다.</Message>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.colors.gray[500]};
    padding: 40px 0;
`

const Message = styled.p`
    color: ${({theme}) => theme.colors.gray[600]};
    font-size: 14px;
    font-weight: 400;
`

export default EmptyLists;