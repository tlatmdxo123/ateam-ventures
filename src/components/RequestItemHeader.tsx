import React from 'react';
import styled from 'styled-components';
import { NormalText, NormalTextLight, SubTitle } from './Texts';
import Warning from './Warning';

interface Props{
    title:string,
    client:string,
    due:string,
    status:string,
}
function RequestItemHeader({title,client,due,status}:Props) {
    return (
        <Container>
            <TitleContainer>
                <SubTitle>{title}</SubTitle>
                {status === '상담중' && <Warning value={status}/>}
            </TitleContainer>
            
            <NormalText style={{marginBottom:'24px'}}>{client}</NormalText>
            <NormalTextLight>{due}까지 납기</NormalTextLight>
        </Container>
    );
}

const Container = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.colors.gray[200]};
    padding-bottom: 16px;
`
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`



export default RequestItemHeader;