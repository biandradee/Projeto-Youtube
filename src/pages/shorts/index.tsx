import { MainContainer, Container, ContainerImage } from "./styles";
import React from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';

function Shorts() {
    return (
        <MainContainer>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <div style={{ width: '100%', padding: '50px 30px', display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <ContainerImage />
                    </Container>
                </div>
            </div>
        </MainContainer>
    )
};

export default Shorts;