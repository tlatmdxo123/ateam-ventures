import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';

interface Props{
    close:() => void,
}
function Drawer({close}:Props) {
    const background = useRef<HTMLDivElement>(null);

    function onClickHandler(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        const isBackground = e.target === background.current;
        if(isBackground) close();
    }
    
    return (
        <Background onClick={(e) => onClickHandler(e)} ref={background}>
            <DrawerContainer>
                <DrawerHeader>
                    <Logo size='s' color={true}/>
                </DrawerHeader>
                <DrawerBody>
                    <NavigationLinks mobile={true}/>
                </DrawerBody>
            </DrawerContainer>
        </Background>
    );
}

const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background:rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const showLeftToRight = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
`

const DrawerContainer = styled.nav`
    width: 80%;
    height: 100%;
    background: #ffffff;
    animation: 0.3s ${showLeftToRight} ease-in-out;
`

const DrawerHeader = styled.div`
    padding: 16px 20px;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray[200]};
`

const DrawerBody = styled.div`
    padding:36px 32px;
`


export default Drawer;