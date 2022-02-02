import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props{
    label:string,
    lists:string[],
    selected:string[],
    onCheckHandler:(e:React.ChangeEvent | React.KeyboardEvent) => void,
    closeMenu:() => void,
}

function CheckLists({label,lists,selected,onCheckHandler,closeMenu}:Props) {
    const dropMenu = useRef<HTMLUListElement>(null);

    function closeOnClickOutside(e:MouseEvent){
        const isMenu = (dropMenu.current as HTMLUListElement)?.contains(e.target as HTMLElement);
        if(isMenu === false) closeMenu();
    }

    useEffect(() => {
        document.addEventListener('click', closeOnClickOutside);
        return () => document.removeEventListener('click',closeOnClickOutside);
    },[]);

    return (
        <Container role='listbox' aria-labelledby={label} id={`listbox-${label}`} ref={dropMenu}>
            {lists.map(list => (  
                <Option key={list}>
                    <CheckBox type='checkbox' id={list} value={list} checked={selected.includes(list)} onChange={onCheckHandler} onKeyPress={onCheckHandler}/>
                    <OptionLabel htmlFor={list}>{list}</OptionLabel>
                </Option>
            ))}
        </Container>
    );
}

const Container = styled.ul`
    width:max-content;
    position: absolute;
    z-index: 1;
    left: 0;
    top: calc(100% + 4px);
    padding: 12px 38px 16px 12px;
    background-color: #ffffff;
    border-radius: 4px;
    border:1px solid ${({theme}) => theme.colors.gray[600]};
`
const Option = styled.li`
    display: flex;
    align-items: center;
`
const CheckBox = styled.input`
    width: 18px;
    height: 18px;
    border-radius: 2px;
    margin-right: 10px;
`
const OptionLabel = styled.label`
    color:${({theme}) => theme.colors.gray[900]};
`

export default CheckLists;