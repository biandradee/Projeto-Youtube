import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
`;

export const LoginContainer = styled.div`
    width: 450px;
    height: 500px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
    display: flex;
    font-size: 25px;
    font-weight: 400;
    align-items: center;
    justify-content: center;  
    }

    span {
        font-size: 17px;
        margin-bottom: 40px;
    }

    input {
        width: 350px;
        height: 40px;
        margin-top: 5px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 80px;

    h3 {
        font-size: 15px;
        color: #4169E1;
        margin-left: 50px;
        cursor: pointer;
    }
`;

export const Button = styled.div`
    background-color: #4169E1;
    width: 100px;
    height: 35px;
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 180px;
    cursor: pointer;
`;