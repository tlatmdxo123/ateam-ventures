import React from 'react';
import styled from 'styled-components';
import DropMenu from './DropMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addMaterialFilter, addMethodFilter, removeMaterialFilter, removeMethodFilter, resetFilter } from '../redux/filter/actions';
import { selectFilter } from '../redux/filter/selectors';
import {MdRestartAlt} from 'react-icons/md';
import { useMobileStatus } from '../hooks/useViewportSize';

function TypeFilters() {
    const dispatch = useDispatch();
    const {materials:materialFilters,methods:methodFilters} = useSelector(selectFilter)

    const isMobile = useMobileStatus();

    const resetActive = materialFilters.length + methodFilters.length > 0

    return (
         <Container>
            <DropMenu 
                label='가공방식' 
                lists={['밀링','선반']} 
                selected={methodFilters} 
                addFilter={(filter:string) => dispatch(addMethodFilter(filter))}
                removeFilter={(filter:string) => dispatch(removeMethodFilter(filter))}
                marginRight={8}/>
                
            <DropMenu 
                label='재료' 
                lists={['알루미늄','탄소강','구리','합금강','강철']} 
                selected={materialFilters}
                addFilter={(filter:string) => dispatch(addMaterialFilter(filter))}
                removeFilter={(filter:string) => dispatch(removeMaterialFilter(filter))}/>
            {resetActive && (
                <ResetButton onClick={() => dispatch(resetFilter())}>
                    <MdRestartAlt style={{fontSize:'20px',marginRight:'3px'}}/> {!isMobile && '필터링 리셋'}
                </ResetButton>
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;

`

const ResetButton = styled.button`
    display: flex;
    align-items: center;
    color:${({theme}) => theme.colors.primary[500]};
    font-size: ${({theme}) => theme.fontSizes['s']};
    font-weight: 400;
    margin-left: 24px;
    cursor: pointer;
`

export default TypeFilters;