import React from 'react';
import { ContainerLogo, CardContainer, Container, Icon } from './styles';
import CardShortVideo from "../cards-shorts-videos/index";
import ShortsIcon from '../../assets/shorts.png';

function Cards() {  
    return (
        <Container>
            <ContainerLogo>
                <Icon alt="" src={ShortsIcon} />
                <h3>Shorts</h3>
            </ContainerLogo>
            <CardContainer>
                <CardShortVideo
                    thumbnail="https://i.ytimg.com/vi/1R1kxSFqvls/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAoanEgFPm6f8E10P4e7c1HU_LOiA"
                    title="???" 
                    details="1,5 mi de visualizações" 
                />
                <CardShortVideo
                    thumbnail="https://i.ytimg.com/vi/ZjXK9MHrY0I/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDWqilU2gneQbeLoDNvfGvVdEToCw"
                    title="Shingeki terá 1 episódio?" 
                    details="25 mil visualizações" 
                />
                <CardShortVideo
                    thumbnail="https://i.ytimg.com/vi/_iTptFt-JP8/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAFFwUBDSEd229NnAyN9gAtWmE-vg"
                    title="Como Mitsuri criou a..." 
                    details="229 mil visualizações" 
                />
                <CardShortVideo
                    thumbnail="https://i.ytimg.com/vi/Pgn1NwRFPiM/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCE8WkH_kBWR0akOrofhaBsuV0xvw"
                    title="Testei CARMED fini!" 
                    details="228 mil visualizações" 
                />
                <CardShortVideo
                    thumbnail="https://i.ytimg.com/vi/FKIn3kOJ_RA/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCW3EDsyJDTMjNcF_edemB6wLVY3w"
                    title="Makes da SHEIN..." 
                    details="137 mil visualizações" 
                />
                <CardShortVideo
                    thumbnail="https://i.ytimg.com/vi/hm2OHhJg2rU/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCuyZkwx15VXis1eiaq8Ffq_GnJ0Q"
                    title="O retorno dos batons das...." 
                    details="3,3 mi de visualizações" 
                />
            </CardContainer>
        </Container>
    )
}

export default Cards;