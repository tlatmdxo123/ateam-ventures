import React from 'react';
import styled from 'styled-components';
import DropMenu from './DropMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addIngreFilter, addProcessFilter, removeIngreFilter, removeProcessFilter, resetFilter } from '../redux/filter/actions';
import { selectIngredients, selectProcess } from '../redux/filter/selectors';
import {MdRestartAlt} from 'react-icons/md';

function TypeFilters() {
    const dispatch = useDispatch();
    const ingredientFilters = useSelector(selectIngredients);
    const processFilters = useSelector(selectProcess);

    const resetActive = ingredientFilters.length + processFilters.length > 0

    return (
         <Container>
            <DropMenu 
                label='가공방식' 
                lists={['밀링','선반']} 
                selected={processFilters} 
                addFilter={(filter:string) => dispatch(addProcessFilter(filter))}
                removeFilter={(filter:string) => dispatch(removeProcessFilter(filter))}
                marginRight={8}/>
                
            <DropMenu 
                label='재료' 
                lists={['알루미늄','탄소강','구리','합금강','강철']} 
                selected={ingredientFilters}
                addFilter={(filter:string) => dispatch(addIngreFilter(filter))}
                removeFilter={(filter:string) => dispatch(removeIngreFilter(filter))}/>
            {resetActive && (
                <ResetButton onClick={() => dispatch(resetFilter())}>
                    <MdRestartAlt style={{fontSize:'20px',marginRight:'3px'}}/> 필터링 리셋
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