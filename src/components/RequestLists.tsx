import React from 'react';
import styled from 'styled-components';
import ConsultFilterToggle from './ConsultFilterToggle';
import TypeFilters from './TypeFilters';


function RequestLists() {
    return (
        <Container>
            <FilterBar>
               <TypeFilters/>
               <ConsultingFilter>
                    <ConsultFilterToggle/>
               </ConsultingFilter>
            </FilterBar>
        </Container>
    );
}

const Container = styled.div`
    
`
const FilterBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ConsultingFilter = styled.div`

`

export default RequestLists;