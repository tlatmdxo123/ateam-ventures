import React from 'react';
import styled from 'styled-components';
import { MdOutlineDomain } from "react-icons/md";

function Navigation() {
    return (
        <Container>
            <LogoContainer>
                <Logo src='/logo@3x.png'/>
            </LogoContainer>
            <Links>
                <LinkItem><MdOutlineDomain style={{marginRight:'8px'}}/>A가공 업체</LinkItem>
                <Divider/>
                <LinkItem>로그아웃</LinkItem>
            </Links>
        </Container>
    );
}

const Container =styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    background: ${props => props.theme.colors.primary[700]};
    padding:25px 40px;
    box-sizing: border-box;
`
const Links = styled.div`
    display: flex;
`
const LinkItem = styled.button`
    color:#ffffff;
    font-size: ${({theme}) => theme.fontSizes['m']};
    font-weight: 500;
    display: flex;
    align-items: center;
`
const Divider = styled.div`
    width: 1px;
    height: 16px;
    background-color: #ffffff;
    margin:0 32px;
`
const LogoContainer = styled.h2`
    width: 153px;
`
const Logo = styled.img`
    width: 100%;
`

export default Navigation;