import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {MdArrowDropDown} from 'react-icons/md';
import CheckLists from './CheckLists';
import { PrimaryButton } from './Buttons';


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
    const themeContext = useContext(ThemeContext);
    const buttonRef = useRef<HTMLButtonElement>(null);
   
    const selectedCount = selected.length;

    const isActive = isOpen || selectedCount>0

    function onCheckHandler(e:React.ChangeEvent | React.KeyboardEvent){
        const target= e.target as HTMLInputElement
        if((e as React.KeyboardEvent).key === 'Enter'){
            target.checked = !target.checked;
        }
        target.checked === true ? addFilter(target.value) : removeFilter(target.value);
    }

    return (
       <Container>
        <PrimaryButton 
                id={label}
                type='button' 
                background={isActive ? themeContext.colors.primary[700] : '#ffffff'}
                color={isActive ? '#ffffff': themeContext.colors.gray[900]}
                border={!isActive && themeContext.colors.gray[600]}
                size='m'
                onClick={() => setOpen(open => !open)} 
                aria-expanded={isOpen} 
                aria-controls={`listbox-${label}`}
                ref={buttonRef}
                style={{paddingRight:'13.5px',marginRight:'8px'}}
            >
            {label}{selectedCount > 0 && `(${selectedCount})`}<MdArrowDropDown style={{marginLeft:'12px',fontSize:'20px'}}/>
        </PrimaryButton>
        {isOpen && (
            <CheckLists label={label} lists={lists} selected={selected} onCheckHandler={onCheckHandler} closeMenu={() => setOpen(false)}/>
        )}
       </Container>
    );
}

const Container = styled.div`
    position: relative;
`



export default DropMenu;