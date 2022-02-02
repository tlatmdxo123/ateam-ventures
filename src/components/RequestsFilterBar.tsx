import React from 'react';
import ConsultFilterToggle from './ConsultFilterToggle';
import TypeFilters from './TypeFilters';
import styled from 'styled-components';

function RequestsFilterBar() {
    return (
        <FilterBar>
            <TypeFilters/>
            <ConsultingFilter>
                <ConsultFilterToggle/>
            </ConsultingFilter>
        </FilterBar>
    );
}

const FilterBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:32px;
    @media(max-width:${({theme}) => theme.viewPort['mobile']+'px'}){
        flex-direction: column;
        align-items: normal;
        justify-content: normal;
    }
`

const ConsultingFilter = styled.div`
    @media(max-width:${({theme}) => theme.viewPort['mobile']+'px'}){
        margin-top:20px;
    }
`

export default RequestsFilterBar;