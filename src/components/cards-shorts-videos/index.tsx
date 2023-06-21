import React from 'react';
import { CardVideo, DetailsShortVideo, ThumbnailShortVideo, TitleShortVideo } from './styles'

interface Props {
    title: string
    thumbnail: string
    details: string
}

function CardShortVideo(props: Props) {
    return (
        <CardVideo>
            <ThumbnailShortVideo alt='Thumbnail' src={props.thumbnail} />
            <TitleShortVideo>{props.title}</TitleShortVideo>
            <DetailsShortVideo>{props.details}</DetailsShortVideo>
        </CardVideo>
    )
}

export default CardShortVideo;