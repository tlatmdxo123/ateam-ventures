import React, { useState } from 'react';
import styled from 'styled-components';
import {MdArrowDropDown} from 'react-icons/md';


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

    function onCheckHandler(e:React.ChangeEvent){
        const target= e.target as HTMLInputElement
        target.checked === true ? addFilter(target.value) : removeFilter(target.value);
    }

    return (
       <Label isActive={isOpen || selectedCount>0} id={label} marginRight={marginRight}>
            <Button type='button' onClick={() => setOpen(open => !open)}>
                {label}{selectedCount > 0 && `(${selectedCount})`}<MdArrowDropDown style={{marginLeft:'12px',fontSize:'20px'}}/>
            </Button>
            {isOpen && (
                <CheckLists role='listbox' aria-labelledby={label}>
                    {lists.map(list => (  
                        <Option key={list}>
                            <CheckBox type='checkbox' id={list} value={list} checked={selected.includes(list)} onChange={(e) => onCheckHandler(e)}/>
                            <OptionLabel htmlFor={list}>{list}</OptionLabel>
                        </Option>
                    ))}
                </CheckLists>
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
const CheckLists = styled.ul`
    width:max-content;
    position: absolute;
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
const OptionLabel = styled.label``

export default DropMenu;