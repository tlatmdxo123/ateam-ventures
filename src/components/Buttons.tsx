import React from 'react';
import styled from 'styled-components';

export const PrimaryButton = styled.button<{background?:string,color:string,size:string,border?:string}>`
    display: block;
    padding:${({size}) => size === 's' ? '6px' : size === 'm' ? '9px' : '12px'} 12px;
    border-radius: 4px;
    background-color: ${({background}) => background ? background : '#ffffff'};
    font-size: ${({theme}) => theme.fontSizes['s']};
    box-shadow:${({border}) => border ? `0 0 0 1px ${border} inset` : ''};
    display:flex;
    align-items: center;
    color:${({color}) => color};
    cursor: pointer;
`

