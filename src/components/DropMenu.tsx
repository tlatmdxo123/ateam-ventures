import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {MdArrowDropDown} from 'react-icons/md';
import CheckLists from './CheckLists';


interface Props{
    label:string,
    lists:string[],
    selected:string[],
    addFilter:(filter:string) => void,
    removeFilter:(filter:string) => void,
    marginRight?:number,
}

function DropMenu({label,lists,selected,addFilter,removeFilter,marginRight=0}:Props) {
    const [isOpen,setOpen] = useState(false);
   
    const selectedCount = selected.length;

    function onCheckHandler(e:React.ChangeEvent | React.KeyboardEvent){
        const target= e.target as HTMLInputElement
        if((e as React.KeyboardEvent).key === 'Enter'){
            target.checked = !target.checked;
        }
        target.checked === true ? addFilter(target.value) : removeFilter(target.value);
    }

    return (
       <Label isActive={isOpen || selectedCount>0} id={label} marginRight={marginRight}>
            <Button type='button' onClick={() => setOpen(open => !open)} aria-expanded={isOpen} aria-controls={`listbox-${label}`}>
                {label}{selectedCount > 0 && `(${selectedCount})`}<MdArrowDropDown style={{marginLeft:'12px',fontSize:'20px'}}/>
            </Button>
            {isOpen && (
                <CheckLists label={label} lists={lists} selected={selected} onCheckHandler={onCheckHandler} closeMenu={() => setOpen(false)}/>
            )}
        </Label>
    );
}

const Label = styled.label<{isActive:boolean,marginRight?:number}>`
    display: block;
    position: relative;
    padding:9px 19px 9px 12px;
    margin-right:${({marginRight}) => marginRight+'px'} ;
    border-radius: 4px;
    border:1px solid ${({theme}) => theme.colors.gray[600]};
    background-color: ${({theme,isActive}) => isActive ? theme.colors.primary[700] : '#ffffff'};
    button{
        color:${({theme,isActive}) => isActive ? '#ffffff' : theme.colors.gray[900]};
    };
`
const Button = styled.button`
    font-size: ${({theme}) => theme.fontSizes['s']};
    display:flex;
    align-items: center;
`

export default DropMenu;