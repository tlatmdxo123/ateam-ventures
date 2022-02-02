import React from 'react';
import styled from 'styled-components';
import { NormalText, NormalTextBold } from './Texts';

interface Props{
    count:number,
    amount:number,
    method:string[],
    material:string[],
}

interface InfoProps{
    label:string,
    value:string,
}

function InfoItem({label,value}:InfoProps){
    return (
        <ListContainer>
            <NormalText style={{marginRight:'32px',width:'70px'}}>{label}</NormalText>
            <NormalTextBold>{value}</NormalTextBold>
        </ListContainer>
    )
}

function RequestItemBody({count,amount,method,material}:Props) {
    const infoLists = [['도면개수',`${count}개`],['총 수량',`${amount}개`],['가공방식',method.join(',')],['재료',material.join(',')]]
    
    return (
        <Container>
            {infoLists.map(([label,value]) => (
                <InfoItem key={label+value} label={label} value={value}/>
            ))}
        </Container>
    );
}

const Container =styled.ul`
    margin-top:32px;
`

const ListContainer = styled.li`
    display: flex;
    align-items: center;
    margin-bottom:8px;
`

export default RequestItemBody;