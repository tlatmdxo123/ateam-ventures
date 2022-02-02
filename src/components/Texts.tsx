import styled from 'styled-components';

export const SubTitle = styled.h4`
    font-size: 16px;
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 700;
    margin-bottom: 4px;
`
export const NormalText = styled.p`
    font-size: 14px;
    color:${({theme}) => theme.colors.gray[900]};
    font-weight: 400;
`
export const NormalTextLight = styled(NormalText)`
    color:${({theme}) => theme.colors.gray[600]};
`
export const NormalTextBold = styled(NormalText)`
    font-weight: 700;
`