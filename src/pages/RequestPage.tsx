import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import RequestLists from '../components/RequestLists';
import RequestsFilterBar from '../components/RequestsFilterBar';

function RequestPage() {
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