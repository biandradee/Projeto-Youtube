import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    margin-top: 100px;
`;

export const ContainerImage = styled.img`
    width: 120px;
    height: 120px;
    margin: auto;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 25px;
    padding: 10px;
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    margin-bottom: 160px;
`;

export const Login = styled.div<{ margin?: string }>`
    width: 100px;
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

export const ButtonIcon = styled.img`
    width: 20px;
`;
