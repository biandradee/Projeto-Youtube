import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean}>`
    width: ${({ openMenu }) => openMenu? '280px' : '90px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: ${({ openMenu }) => openMenu? 'auto' : 'hidden'};
    overflow-x: hidden;
    position: sticky;
    top: 55px;

`;

export const MenuItem =styled.div<{ openMenu: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu? '490' : '500'};
        font-size: ${({ openMenu }) => openMenu? '14px' : '11px'};
        margin: ${({ openMenu }) => openMenu? '10px 10px 10px 20px' : '5px 0 0 0'};   
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img<{ openMenu: boolean }>`
    width: 25px;
    height: 23px;
`;

export const Divider = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => openMenu? '100%' : 'none'};
  border-top: ${({ openMenu }) => openMenu? '.5px solid #bfbfbf' : 'none'};
  flex-direction: column;
  margin: ${({ openMenu }) => openMenu? '20px 0' : 'none'};
`;