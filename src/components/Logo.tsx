import React from 'react';
import styled from 'styled-components';

interface Props{
    size:'s' | 'm',
    color?:boolean,
}
function Logo({size,color}:Props) {
    const pxPerSize = {
        's':91.8,
        'm':153,
    }
    return (
        <LogoContainer width={pxPerSize[size]}>
            <a href='/'>
                <LogoImg src={color ? '/logo_color@3x.png' : '/logo@3x.png'} alt='capa 파트너스'/>
            </a>
        </LogoContainer>
    );
}

const LogoContainer = styled.div<{width:number}>`
    width:${({width}) => width+'px'};
`

const LogoImg = styled.img`
    width: 100%;
`

export default Logo;