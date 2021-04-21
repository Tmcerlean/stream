import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import axios from '../utils/axios';
import requests from '../utils/requests';

const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchOriginals);
            setBannerMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    const truncateDescription = (description, length) => {
        return description?.length > length ? description.substr(0, length - 1) + '...' : description;
    }

    return (
        <BannerContainer style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}')` }}>
            <MovieContent>
                <MovieTitle>{bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}</MovieTitle>
                <MovieDescription>{truncateDescription(bannerMovie?.overview, 200)}</MovieDescription>
                <MovieButtons>
                    <PlayButton>
                        <PlayArrowIconStyled style={{ fontSize: 40 }} />
                        Play
                    </PlayButton>
                    <InfoButton>
                        <InfoIconStyled style={{ fontSize: 35 }} />
                        More Info
                    </InfoButton>
                </MovieButtons>
            </MovieContent>
        </BannerContainer>
    )
}

export default Banner;

const BannerContainer = styled.header`
    position: relative;
    background-size: cover;
    background-position: center;
    min-height: 80rem;
    object-fit: contain;
`;

const MovieContent = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    width: 60rem;
    top: 20rem;
    left: 5rem;
`;

const MovieTitle = styled.h1`
    font-size: 7rem;
    color: white;
`;

const MovieDescription = styled.p`
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: white;
`;

const MovieButtons = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const PlayButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.4rem 2rem;
    margin-right: 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.8rem;
    font-weight: 900;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255,0.8);
    }
`;

const PlayArrowIconStyled = styled(PlayArrowIcon)`
    padding-right: 0.5rem;
`;

const InfoButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.4rem 2rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.8rem;
    font-weight: 900;
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    cursor: pointer;

    &:hover {
        background-color: rgba(109, 109, 110, 0.5);
    }
`;

const InfoIconStyled = styled(InfoIcon)`
    padding-right: 0.5rem;
`;