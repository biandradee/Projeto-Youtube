import { useState, useContext } from 'react';
import { Button, ButtonContainer, Container, InputContainer, LoginContainer } from './styles';
import { UserContext } from '../../contexts/userContext';
import GoogleIcon from '../../assets/google.png';
import React from 'react';


function Login(){
    const { handleLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        handleLogin(email, password);
        window.location.href = '/';
      };

    return(
        <Container >
            <LoginContainer>
                <img 
                    src={GoogleIcon} 
                    style={{ width: '80px', margin: '50px 0 0 0' }}
                    alt="" />
                <h2>Fazer login</h2>
                <span>Prosseguir no Youtube</span>
                <InputContainer>
                    <input style={{ fontSize: '15px' }} type='email' placeholder='E-mail ou telefone' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input style={{ fontSize: '15px' }} type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputContainer>
                
                <ButtonContainer>
                    <h3>Criar conta</h3>
                    <Button onClick={handleLoginClick}>
                        Próxima
                    </Button>
                </ButtonContainer>
            </LoginContainer>
        </Container>
    )
};

export default Login;