import React from 'react';
import styled from 'styled-components';
import RequestItemHeader from './RequestItemHeader';
import RequestItemBody from './RequestItemBody';
import { useSelector } from 'react-redux';
import { selectRequest } from '../redux/requests/selectors';

interface Props{
    id:number,
}

function RequestItem({id}:Props) {
    const request = useSelector(selectRequest(id));

    if(!request) return <></>

    const {title,client,due,count,material,method,status,amount} = request;

    return (
        <Container>
            <RequestItemHeader title={title} client={client} due={due} status={status}/>
            <RequestItemBody count={count} material={material} method={method} amount={amount}/>
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

export default RequestItem;