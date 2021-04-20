import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Banner from './Banner';
import Row from './Row';

const Home = () => {
    return (
        <HomeContainer>
            <Navigation />           
            <Banner />
            <Row />
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.main`
`;