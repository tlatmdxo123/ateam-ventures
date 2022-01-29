import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled,{ ThemeContext } from 'styled-components';
import { toggleConsultToggle } from '../redux/filter/actions';
import Toggle from './Toggle';

function ConsultFilterToggle() {
    const dispatch = useDispatch();
    const themeContext = useContext(ThemeContext)
    const toggleId = 'consultFilter' 
    return (
        <Container>
            <Toggle 
                id={toggleId}
                width={34} 
                height={14} 
                ballSize={20}
                activeBackgroundColor={themeContext.colors.primary[300]}
                activeBallColor={themeContext.colors.primary[500]}
                onToggle={() => dispatch(toggleConsultToggle())}/>
            <Label htmlFor={toggleId}>상담 중인 요청만 보기</Label>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`
const Label = styled.label`
    font-size: ${({theme}) => theme.fontSizes['m']};
    color: ${({theme}) => theme.colors.gray[900]};
    margin-left: 16px;
    font-weight: 500;
`

export default ConsultFilterToggle;