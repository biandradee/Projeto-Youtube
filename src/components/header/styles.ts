import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    box-sizing: border-box;
    top: 0;
    z-index: 2;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }

    span {
        font-size: 16px;
        background-color: #9400D3;
        color: white;
        border-radius: 35px;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 520px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 20px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width:70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    :hover {
        background-color: #f2f2f2;
    }
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`;

export const ContainerConfig = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ margin }) => margin? margin : 0};
    cursor: pointer;
`;

export const ButtonConfig = styled.img`
    width: 20px;
`;

export const LoginContainer = styled.div<{ margin?: string }>`
    width: 110px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${({ margin }) => margin? margin : 0};
    padding: 0 12px;
    cursor: pointer;

    :hover {
        background-color: #cceced;
    }

    span {
        color: #1e74ff;
    }
`;

export const DropDownMenu = styled.div<{ openDropDownMenu: boolean}>`
    width: 280px;
    height: 280px;
    background-color: #fff;
    display: ${({ openDropDownMenu }) => (openDropDownMenu ? 'flex' : 'none')};  flex-direction: column;
    border-radius: 10px;
    padding: 10 0px;
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    right: 100px;
`;

export const UserInfoContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

export const UserName = styled.span`
    font-size: 15px;
    font-weight: 400;
`;

export const DropDownMenuContent = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const DropIcon = styled.img`
    width: 30px;
`;

export const DropButton = styled.div`
    font-size: 15px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    padding: 10px 12px;

    span {
        margin-left: 10px;
        margin-top: 5px;

    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const Divider = styled.div`
    width: 100%;
    border-top: .5px solid #e4e4e4;
    flex-direction: column;
    margin: 20px 0;
`;