import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../utils/requests';

const Home = () => {
    return (
        <HomeContainer>
            <Navigation />           
            <Banner />
            <Row 
                title='Originals'
                fetchUrl={requests.fetchOriginals}
                isLarge
            />
            <Row 
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row 
                title='Comedy'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title='Horror'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title='Sci-Fi'
                fetchUrl={requests.fetchSciFi}
            />
            <Row 
                title='Action'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.main`
    background-color: var(--dark-grey-1);
`;