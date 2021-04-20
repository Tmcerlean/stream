import React from 'react';
import styled from 'styled-components';

const Banner = () => {
    return (
        <BannerContainer>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
        </BannerContainer>
    )
}

export default Banner;

const BannerContainer = styled.header`
    background-size: cover;
    background-position: center;
    background-image: url('https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg');
    min-height: 45rem;
`;