import React, { ReactChild } from 'react';
import {ThemeProvider} from 'styled-components'

const theme = {
    colors: {
        warning:"#FFA000",

        primary:{
            700:"#1565C0",
            500:"#2196F3",

        },
        gray:{
            100:"#F5F5F5",
            200:"#E5E5E5",
            500:"#C2C2C2",
            600:"#939FA5",
            900:"#323D45",
        }
    },
    fontSizes: {
        s:'12px',
        m:'14px',
        l:'16px',
        xl:'20px',
    }
}

interface Props{
    children:ReactChild
}

function Theme({children}:Props) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;