import React from "react";
import {  useSelector } from "react-redux";
import styled from "styled-components";
import { selectConsultStatus } from "../redux/filter/selectors";

interface Props{
    width: number,
    height: number,
    ballSize: number,
    activeBackgroundColor:string,
    activeBallColor:string,
    onToggle:() => void,
    id:string,
}

function Toggle({ width, height,ballSize, activeBackgroundColor,activeBallColor,onToggle,id }:Props) {
  const isActive = useSelector(selectConsultStatus)

  return (
    <>
      <ToggleContainer
        id={id}
        role='switch'
        aria-checked={isActive}
        onClick={onToggle}
        width={width}
        height={height}
      >
        <StatusBar
          isActive={isActive}
          activeBackgroundColor={activeBackgroundColor}
          height={height}
        />
        <StatusBall isActive={isActive} size={ballSize} activeBallColor={activeBallColor}/>
      </ToggleContainer>
    </>
  );
}

const ToggleContainer = styled.button<{width:number,height:number}>`
  display: block;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border-radius: ${(props) => props.height + "px"};
  background-color: ${({ theme }) => theme.colors.gray[500]};
  position: relative;
`;

const StatusBar = styled.div<{isActive:boolean,height:number,activeBackgroundColor:string}>`
  width: ${({isActive}) => (isActive ? "100%" : "0px")};
  height: 100%;
  border-radius: ${({height}) => height + "px"};
  background-color: ${({activeBackgroundColor}) => activeBackgroundColor};
  transition: width 0.35s ease-in-out;
`;

const StatusBall = styled.div<{size:number,isActive:boolean,activeBallColor:string}>`
  width: ${({size}) => size + "px"};
  height: ${({size}) => size + "px"};
  border-radius: 50%;
  background-color: ${({isActive,activeBallColor,theme}) => isActive ? activeBallColor : theme.colors.gray[100] };
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) =>
    props.isActive ? `calc(100% - ${props.size + "px"})` : "0px"};
  transition: left 0.35s ease-in-out;
  transition-delay: 0.05s;
`;


export default Toggle;
