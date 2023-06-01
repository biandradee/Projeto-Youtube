import { ButtonIcon, Container, ContainerImage, ContainerLogin, Login, MainContainer, TextContainer, Title } from "./styles";
import LibraryIcon from '../../assets/biblioteca.png';
import LoginIcon from '../../assets/login.png';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';

function Library() {

    const navigate = useNavigate();

    return (
        <MainContainer>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <div style={{ width: '100%', padding: '50px 30px', display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <ContainerImage alt="" src={LibraryIcon}/>
                        <TextContainer>
                            <Title>Desfrute dos seus vídeos favoritos</Title>
                            <span>Faça login para acessar os vídeos salvos ou marcados com gostei.</span>
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

export default Library;