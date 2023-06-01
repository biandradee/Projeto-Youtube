import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    LoginContainer,
    ButtonConfig,
    ContainerConfig,
    DropDownMenu,
    UserInfoContainer,
    UserName,
    DropDownMenuContent,
    Divider,
    DropButton,
    DropIcon
} from "./styles";
import HamburguerIcon from '../../assets/hamburguer.png';
import Logo from '../../assets/yt.png'
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import PontosIcon from '../../assets/3pontos.png';
import LoginIcon from '../../assets/login.png';
import VideoIcon from '../../assets/video.png';
import SinoIcon from '../../assets/sino.png';
import { MenuContext } from "../../contexts/menuContext";
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import SairIcon from '../../assets/sair.png';
import CanalIcon from '../../assets/canal.png';
import StudioIcon from '../../assets/studio.png';
import AlternarIcon from '../../assets/alternar.png';

function Header(){
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu  } = useContext(UserContext);
 
    const navigate = useNavigate();

    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu)
    };
    
    const goOut = () => {
        logOut()
        handleDropDownMenu()
        window.location.href = '/';
    };
    
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 5px'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{ cursor: 'pointer', width: '100px', margin: '0 0 0 10px' }} alt="" src={Logo} />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" style={{ fontSize: '16px'}} />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                {login? 
                    <>
                        <ButtonContainer margin='0 0 0 18px'>
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 18px'>
                            <ButtonIcon alt="" src={SinoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 18px' onClick={handleDropDownMenu}>
                            <span>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</span>
                        </ButtonContainer>
                        
                        <DropDownMenu openDropDownMenu={openDropDownMenu}>
                            <UserInfoContainer>
                                <ButtonContainer margin='0 0 0 10px' onClick={handleDropDownMenu} style={{backgroundColor: '#9400D3'}}>
                                    <span>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</span>
                                </ButtonContainer>
                                <UserName>
                                    {user && user.name ? user.name : ''} <br />
                                    {user && user.email ? user.email : ''}
                                </UserName>
                            </UserInfoContainer>
                            
                            <Divider />

                            <DropDownMenuContent>
                                <DropButton> 
                                    <DropIcon src={CanalIcon}/>
                                    <span>Seu canal</span>
                                </DropButton>
                                <DropButton> 
                                    <DropIcon src={StudioIcon}/>
                                    <span>YouTube Studio</span>
                                </DropButton>
                                <DropButton> 
                                    <DropIcon src={AlternarIcon}/>
                                    <span>Alternar conta</span>
                                </DropButton>
                                <DropButton onClick={goOut}> 
                                    <DropIcon src={SairIcon}/>
                                    <span>Sair</span>
                                </DropButton>
                            </DropDownMenuContent>
                        </DropDownMenu>

                    </>
                :
                    <>
                        <ContainerConfig margin='0 0 0 18px'>
                            <ButtonConfig alt="" src={PontosIcon} />
                        </ContainerConfig>
                        <LoginContainer margin='1px 0 0 18px' onClick={() => navigate('/login')}>
                            <ButtonIcon alt="" src={LoginIcon} />
                            <span>Fazer login</span>
                        </LoginContainer>
                    </>
                }
            </HeaderButton>
        </Container>
    
    )
};

export default Header; 