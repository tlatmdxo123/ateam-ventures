import React from 'react';
import { useRequest } from '../hooks/useFetch';
import Loading from './Loading';
import styled from 'styled-components';
import { Request } from '../types/Request';
import RequestItemHeader from './RequestItemHeader';
import RequestItemBody from './RequestItemBody';

interface Props{
    id:number,
}

function RequestItem({id}:Props) {
    const {data:request,isLoading,error} = useRequest<Request>(id);

    if(request === undefined) return <></>;
    if(isLoading) return <Loading/>
    if(error) throw new Error(error);

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