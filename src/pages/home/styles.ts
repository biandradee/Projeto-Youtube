import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const ContainerVideo = styled.div`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 50px;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

export const Divider = styled.div`
  border-top: 5px solid #e4e4e4;
  flex-direction: column;
  margin: 50px 0 50px 0;
`;