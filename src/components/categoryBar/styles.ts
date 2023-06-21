import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({openMenu}) => openMenu? '82%' : '93%'};
  height: 56px;
  position: fixed;
  top: 55px;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
`;

export const Button = styled.button`
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: black;
  background-color: #f2f2f2;
  cursor: pointer;

  &:hover{
    background-color: #e3e3e3;
  }

  &:focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 70%;
  overflow-x: hidden;
  z-index: 1;
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
`;

export const SliderButtons = styled.div`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;