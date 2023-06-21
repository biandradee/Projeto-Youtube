import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    h3 {
    margin-left: 10px;
    font-size: 22px;
    font-weight: 400;
   }
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    column-gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 10px;
`;
