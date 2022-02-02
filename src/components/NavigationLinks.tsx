import React from 'react';
import styled from 'styled-components';
import { MdOutlineDomain } from "react-icons/md";

interface Props{
    mobile:boolean,
}

function NavigationLinks({mobile}:Props) {
    return (
        <Container mobile={mobile}>
            <LinkItem mobile={mobile} href='#'><MdOutlineDomain style={{marginRight:'8px'}}/>A가공 업체</LinkItem>
            {!mobile && <Divider/>}
            <LinkItem mobile={mobile} href='#'>로그아웃</LinkItem>
        </Container>
    );
}

const Container = styled.div<{mobile:boolean}>`
    display: flex;
    flex-direction: ${({mobile}) => mobile ? 'column' : 'row'};
`
const LinkItem = styled.a<{mobile:boolean}>`
    font-size: ${({theme}) => theme.fontSizes['m']};
    font-weight: 500;
    display: flex;
    align-items: center;
    color:${({mobile,theme}) => mobile ? theme.colors.gray[900] : '#ffffff'};
    margin-bottom: ${({mobile}) => mobile ? '24px' : '0'};
    cursor: pointer;
`
const Divider = styled.div`
    width: 1px;
    height: 16px;
    background-color: #ffffff;
    margin:0 32px;
`

export default NavigationLinks;