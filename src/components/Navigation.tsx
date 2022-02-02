import React, {  useState } from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks/useViewportSize';
import { MdMenu } from "react-icons/md";
import Drawer from './Drawer';
import NavigationLinks from './NavigationLinks';
import Logo from './Logo';

function Navigation() {
    const [drawerActive,setDrawerActive] = useState(false);
    const isMobile = useMobile();

    return (
        <Container>
            {isMobile && (
                <>
                    <MenuButton type='button' aria-expanded={drawerActive} onClick={() => setDrawerActive(active => !active)}>
                        <MdMenu/>
                    </MenuButton>
                    {drawerActive && <Drawer close={() => setDrawerActive(false)}/>}
                </>
            )}
            <Logo size={isMobile ? 's' : 'm'}/>
            {!isMobile && (
                <NavigationLinks mobile={false}/>
            )}
        </Container>
    );
}

const Container =styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    background: ${props => props.theme.colors.primary[700]};
    padding:25px 40px;
    box-sizing: border-box;
    box-shadow: 0 2px 2px rgba(0,0,0,24%);

    @media(max-width:${({theme}) => theme.viewPort['mobile']+'px'}){
       justify-content: normal;
       padding:16px 23px;
    }
`


const MenuButton = styled.button`
    font-size: 24px;
    margin-right: 19px;
    color:#ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Navigation;