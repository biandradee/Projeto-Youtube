import { 
    ButtonIcon,
    Container, 
    MenuItem,
    Divider
} from "./styles";
import { MenuContext } from "../../contexts/menuContext";
import React, { useContext } from 'react';
import HomeIcon from '../../assets/homepage.png';
import ShortsIcon from '../../assets/shorts.png';
import InscriptionIcon from '../../assets/inscrições.png';
import LibraryIcon from '../../assets/biblioteca.png';
import HistoryIcon from '../../assets/histórico.png';
import AltaIcon from '../../assets/alta.png';
import ShoppingIcon from '../../assets/shopping.png';
import MusicIcon from '../../assets/música.png';
import FilmIcon from '../../assets/filmes.png';
import LiveIcon from '../../assets/aovivo.png';
import GameIcon from '../../assets/jogos.png';
import NewsIcon from '../../assets/notícias.png';
import SportsIcon from '../../assets/esportes.png';
import LearnIcon from '../../assets/aprender.png';
import SearchIcon from '../../assets/mais.png';
import PremiumIcon from '../../assets/premium.png';
import Music1Icon from '../../assets/musica1.png';
import KidsIcon from '../../assets/kids.png';
import ConfigIcon from '../../assets/config.png';
import ComplaintsIcon from '../../assets/denúncias.png';
import HelpIcon from '../../assets/ajuda.png';
import FeedbackIcon from '../../assets/feedback.png';
import { useNavigate } from "react-router-dom";

const items = [
    { name: 'Início', link: '/', iconSrc: HomeIcon, showItem: true },
    { name: 'Shorts', link: '/shorts', iconSrc: ShortsIcon, showItem: true },
    { name: 'Inscrições', link: '/subscriptions', iconSrc: InscriptionIcon, showItem: true, divider: true },
    { name: 'Biblioteca', link: '/library', iconSrc: LibraryIcon, showItem: true },
    { name: 'Histórico', link: '/history', iconSrc: HistoryIcon, showItem: true, divider: true },
    { name: 'Faça login para curtir vídeos, comentar e se inscrever.', titleStyle: { fontSize: '15px', margin: '0' }, link: '/history', showItem: false, divider: true },
    { name: 'Explorar', titleStyle: { fontSize: '19px', margin: '0' }, link: '/explorar', iconSrc: null, showItem: false },
    { name: 'Em alta', link: '/library', iconSrc: AltaIcon, showItem: false},
    { name: 'Shopping', link: '/library', iconSrc: ShoppingIcon, showItem: false },
    { name: 'Música', link: '/library', iconSrc: MusicIcon, showItem: false },
    { name: 'Filmes', link: '/library', iconSrc: FilmIcon, showItem: false },
    { name: 'Ao vivo', link: '/library', iconSrc: LiveIcon, showItem: false },
    { name: 'Jogos', link: '/library', iconSrc: GameIcon , showItem: false },
    { name: 'Notícias', link: '/library', iconSrc: NewsIcon, showItem: false },
    { name: 'Esportes', link: '/library', iconSrc: SportsIcon, showItem: false },
    { name: 'Aprender', link: '/library', iconSrc: LearnIcon, showItem: false, divider: true  },
    { name: 'Procurar canais', link: '/canais', iconSrc: SearchIcon, showItem: false, divider: true },
    { name: 'Mais do Youtube', titleStyle: { fontSize: '19px', margin: '0' }, link: '/mais', iconSrc: null, showItem: false },
    { name: 'YouTube Premium', link: '/configurações', iconSrc: PremiumIcon, showItem: false },
    { name: 'YouTube Music', link: '/configurações', iconSrc: Music1Icon, showItem: false },
    { name: 'YouTube Kids', link: '/configurações', iconSrc: KidsIcon, showItem: false, divider: true},
    { name: 'Configurações', link: '/configurações', iconSrc: ConfigIcon, showItem: false },
    { name: 'Denúncias', link: '/denúncias', iconSrc: ComplaintsIcon, showItem: false },
    { name: 'Ajuda', link: '/ajuda', iconSrc: HelpIcon, showItem: false },
    { name: 'Enviar feedback', link: '/feedback', iconSrc: FeedbackIcon, showItem: false },
];


function Menu(){
    const { openMenu } = useContext(MenuContext);

    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>
            {items.map((item) => (
                <>
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        {item.showItem || openMenu ? (
                            <>
                            {item.iconSrc && <ButtonIcon openMenu={openMenu} alt="" src={item.iconSrc} />}  
                            <span style={item.titleStyle}>{item.name}</span>
                            </>
                        ) : null}
                    </MenuItem>
                        {item.divider && <Divider openMenu={openMenu} />}
                </>
            ))} 
        </Container>
    )
};  

export default Menu;