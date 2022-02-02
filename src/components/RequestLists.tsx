import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectFilter} from '../redux/filter/selectors';
import { Request } from '../types/Request';
import { pipe } from '../utils/fp';
import EmptyLists from './EmptyLists';
import Loading from './Loading';
import { filterBy,filterByConsult } from '../utils/filter';
import RequestItem from './RequestItem';
import { useRequest } from '../hooks/useFetch';

function RequestLists() {
    const {materials,methods,consult} = useSelector(selectFilter);
    
    const {data:requests,isLoading,error} = useRequest();

    const filteredLists = pipe<Request[]>(filterBy(methods,'method'),filterBy(materials,'material'),filterByConsult(consult))(requests as Request[]);

    if(!filteredLists || filteredLists.length === 0) return <EmptyLists/>
    if(isLoading) return <Loading/>
    if(error) return <div>{error}</div>

    return (
        <Container>
            {filteredLists.map(list => (
                <RequestItem id={list.id} key={list.id}/>
            ))}
        </Container>
    );
}



const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    @media(max-width:960px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
`


export default RequestLists;