import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import RequestLists from '../components/RequestLists';
import RequestsFilterBar from '../components/RequestsFilterBar';
import { useRequest } from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addRequest } from '../redux/requests/actions';
import { Request } from '../types/Request';
import Loading from '../components/Loading';
import Error from '../components/Error';

function RequestPage() {
    const {data:requests,isLoading,error} = useRequest<Request[]>();
    const dispatch = useDispatch();

    useEffect(() => {
        if(requests) dispatch(addRequest(...requests));
    },[requests]);

    if(isLoading) return <Loading/>
    if(error) return <Error message={error}/>
    return (
        <Container>
            <Navigation/>
            <PageCotainer>
                <Header/>
                <RequestsFilterBar/>
                <RequestLists/>
            </PageCotainer>
        </Container>
    );
}

const Container = styled.main`
    padding-top:80px;
`
const PageCotainer = styled.div`
    width: 90%;
    margin:0 auto;
`

export default RequestPage;