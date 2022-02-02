import styled from 'styled-components';

export const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSizes["xl"]};
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 600;
`

export const SubTitle = styled.h4`
    font-size: ${({theme}) => theme.fontSizes['l']};
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 700;
    margin-bottom: 4px;
`

export const NormalText = styled.p`
    font-size: ${({theme}) => theme.fontSizes['m']};
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 400;
`

export const NormalTextLight = styled(NormalText)`
    color:${({theme}) => theme.colors.gray[600]};
`

export const NormalTextBold = styled(NormalText)`
    font-weight: 700;
`