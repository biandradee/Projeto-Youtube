import VideoComponent from "../../components/videoComponent";
import { Container, ContainerVideo, Divider, HomeContainer } from "./styles";
import { MenuContext } from "../../contexts/menuContext";
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import moment from 'moment';
import { useCategoryContext } from "../../contexts/searchCategories";
import CategoryBar from "../../components/categoryBar";
import Header from '../../components/header';
import Menu from '../../components/menu';
import Cards from "../../components/Cards";

function Home() {
    const { openMenu } = useContext(MenuContext);
   
    interface Videos {
        id: string;
        snippet: {
          title: string;
          thumbnails: {
            high: {
              url: string
            }
            maxres: {
              url: string;
            }
          }
          channelTitle: string;
          publishedAt: string;
        },
        statistics: {
          viewCount: string;
        }
    }
    
    const [videos, setVideos] = useState<Videos[]>([]);
    const {categoryId} = useCategoryContext()

    useEffect(() => {
        load()
    }, [categoryId])

    const API_KEY = 'AIzaSyBYMIhP5MGjPszMRIussXU7ETiIG2rSddI';

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=30&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`

    async function load() {
        try {
            const resposta = await axios.get(url)
            setVideos(resposta.data.items)
        }catch(erro){
            console.log(erro)
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else {
            return `${viewCount} visualizações`;
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');

    if (diffDays <= 0) {
        return 'hoje';
    } else if (diffDays === 1) {
        return 'há 1 dia';
    } else if (diffDays <= 7) {
        return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
        const diffWeeks = Math.floor(diffDays / 7);
        if (diffWeeks === 1) {
        return 'há 1 semana';
        } else {
        return `há ${diffWeeks} semanas`;
        }
    } else if (diffDays <= 365) {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) {
            return 'há 1 mês';
            } else {
            return `há ${diffMonths} meses`;
            }
    } else {
        const diffYears = Math.floor(diffDays / 365);
        if (diffYears === 1) {
            return 'há 1 ano';
            } else {
            return `há ${diffYears} anos`;
            }
        }
    }

    return (
        <HomeContainer>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <div style={{ width: '100%', padding: '50px 30px', display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <CategoryBar />
                        <ContainerVideo>
                            {videos.map((video) => (
                                <VideoComponent
                                title={video.snippet.title} 
                                thumbnail={video.snippet.thumbnails.maxres && video.snippet.thumbnails.maxres.url
                                    ? video.snippet.thumbnails.maxres.url
                                    : video.snippet.thumbnails.high && video.snippet.thumbnails.high.url} 
                                channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} 
                                channelName={video.snippet.channelTitle}
                                details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`} 
                                key={video.id}
                                />
                            ))}
                        </ContainerVideo>
                        <Divider />
                        <Cards />
                    </Container>
                </div>
            </div>
        </HomeContainer>
    )
};

export default Home;