import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import RequestItemHeader from './RequestItemHeader';
import RequestItemBody from './RequestItemBody';
import { useSelector } from 'react-redux';
import { selectRequest } from '../redux/requests/selectors';
import { PrimaryButton } from './Buttons';

interface Props{
    id:number,
}

function RequestItem({id}:Props) {
    const themeContext = useContext(ThemeContext);
    const primaryBlue = themeContext.colors.primary[500];
    const request = useSelector(selectRequest(id));

    if(!request) return <></>

    const {title,client,due,count,material,method,status,amount} = request;

    return (
        <Container>
            <RequestItemHeader title={title} client={client} due={due} status={status}/>
            <RequestItemBody count={count} material={material} method={method} amount={amount}/>
            <Buttons>
                <PrimaryButton type='button' background={primaryBlue} color='#ffffff' style={{marginRight:'8px'}} size='s'>
                    요청 내역 보기
                </PrimaryButton>
                <PrimaryButton type='button' color={primaryBlue} border={primaryBlue} size='s'>
                    채팅하기
                </PrimaryButton>
            </Buttons>
        </Container>
    );
}

const Container = styled.li`
    padding: 24px 16px;
    border:1px solid ${({theme}) => theme.colors.gray[200]};
    cursor: pointer;
    &:hover{
        border:2px solid ${({theme}) => theme.colors.primary[500]};
    }
`
const Buttons = styled.div`
    margin-top: 32px;
    display: flex;
`

export default RequestItem;