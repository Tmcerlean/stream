import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Plans from './Plans';

const Profile = () => {

    const user = useSelector(selectUser);

    return (
        <ProfileContainer>
            <Navigation />
            <ProfileBody>
                <MainHeader>Edit Profile</MainHeader>
                <ProfileInfo>
                    <ProfileAvatar src="https://occ-0-2585-1167.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ3MDACwIkb75QyhEKYiqUIobApOgfIq_-e7vpHBbOThrbSPEGRNfbb5eIJV6R8dETkd-jLbJucne2M8bAGKqRU.png?r=517"/>
                    <ProfileDetails>
                        <UserEmail>{ user.email }</UserEmail>
                        <ProfilePlans>
                            <PlansHeader>Plans</PlansHeader>
                            <Plans />
                            <SignOutButton onClick={() => auth.signOut()}>Sign Out</SignOutButton>
                        </ProfilePlans>
                    </ProfileDetails>
                </ProfileInfo>

            </ProfileBody>
        </ProfileContainer>
    )
}

export default Profile;

const ProfileContainer = styled.main`
    height: 100vh;
    color: white;
    background-color: var(--dark-grey-1);
`;

const ProfileBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;
    max-width: 80rem;
`;

const MainHeader = styled.h1`
    color: white;
    font-size: 3rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #282c2d;
`;

const ProfileInfo = styled.div`
    display: flex;
`;

const ProfileAvatar = styled.img`
    width: 4rem;
    height: 4rem;
`;

const ProfileDetails = styled.div`
    flex: 1;
    margin-left: 2.5rem;
    color: white;
`;

const UserEmail = styled.h2`
    background-color: gray;
    padding: 1.5rem;
    font-size: 1.5rem;
    padding-left: 2rem;
`;

const ProfilePlans = styled.div`
    margin-top: 2rem;
`;

const PlansHeader = styled.h3`
    border-bottom: 1px solid #282c2d;
    padding-bottom: 1rem;
`;

const SignOutButton = styled.button`
    width: 100%;
    margin-top: 5%;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark-grey-1);
    background-color: white;
    border: none;
    outline: none;
    cursor: pointer;
`;
