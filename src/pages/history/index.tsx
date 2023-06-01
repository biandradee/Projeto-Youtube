import { ButtonIcon, Container, ContainerImage, ContainerLogin, Login, MainContainer, TextContainer, Title } from "./styles";
import HistoryIcon from '../../assets/histórico.png';
import LoginIcon from '../../assets/login.png';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';

function History() {

    const navigate = useNavigate();

    return (
        <MainContainer>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <div style={{ width: '100%', padding: '50px 30px', display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <ContainerImage alt="" src={HistoryIcon}/>
                        <TextContainer>
                            <Title>Controle o que você assiste</Title>
                            <span>O histórico de exibição não é visível quando você está desconectado.</span>
                        </TextContainer>
                        <ContainerLogin>
                            <Login margin='0 0 0 10px' onClick={() => navigate('/login')}>
                                <ButtonIcon alt="" src={LoginIcon} />
                                <span>Fazer login</span>
                            </Login>
                        </ContainerLogin>
                    </Container>
                  </div>
            </div>  
        </MainContainer>
    )
};

export default History;