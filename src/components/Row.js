import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../utils/axios';
import requests from '../utils/requests';

const Row = ({ title, fetchUrl, isLarge }) => {

    const [movies, setMovies] = useState([]);

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, []);

    const rowDetails = movies?.map((movie) => {

        if (isLarge) {
            return (
                <LargeCard key={movie.id} src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
            );
        }
        return (
            <SmallCard key={movie.id} src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
        );       
    });

    return (
        <Test>
            <Title>{title}</Title>
            <RowContainer>
                {rowDetails}
            </RowContainer>
        </Test>
    )
}

export default Row;

const Test = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    transform: translateY(-20rem);
`;

const Title = styled.h2`
    padding-left: 5rem;
    font-size: 2rem;
    color: white;
    transform: translateY(2rem);
`;

const RowContainer = styled.div`
    display: flex;
    padding-top: 3rem;
    padding-left: 5rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const LargeCard = styled.img`
    width: 22.5rem;
    max-height: 45rem;
    border-radius: 0.5rem;
    margin: 0.25rem;
    margin-bottom: 5rem;
    object-fit: contain;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: all 0.25s;

    &:hover {
        transform: scale(1.15);
    }
`;

const SmallCard = styled.img`
    min-width: 22.5rem;
    height: 15rem;
    border-radius: 0.5rem;
    margin: 0.25rem;
    margin-bottom: 3rem;
    object-fit: cover;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: all 0.25s;

    &:hover {
        transform: scale(1.15);
    }
`;