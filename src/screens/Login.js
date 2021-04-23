import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';

const Login = () => {

    const [signInSelected, setSignInSelected] = useState(false);

    return (
        <LoginContainer>
            <LoginBackground>

                {signInSelected ? (
                    <SignIn />
                ) : (
                    <>
                        <Logo>Stream.</Logo>
                        <SignInButton onClick={() => setSignInSelected(true)}>Sign In</SignInButton>
                        <LoginBody>
                            <MainHeader>Unlimited films, TV programmes and more.</MainHeader>
                            <LargeSubHeader>Watch anywhere. Cancel at any time.</LargeSubHeader>
                            <SmallSubHeader>Ready to watch? Enter your email to create or restart your membership.</SmallSubHeader>
                            <RegisterForm>
                                <RegisterInput placeholder='Email Address'/>
                                <RegisterButton>Get Started</RegisterButton>
                            </RegisterForm>
                        </LoginBody>
                    </>
                )}

                
                <BackgroundGradient />
            </LoginBackground>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.main`
    position: relative;
    height: 100vh;
    background: url('https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/e75c587f-468b-41fb-903d-3ddeccb616be/GB-en-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg') center no-repeat;
    background-size: cover;
    overflow: hidden;
`;

const LoginBackground = styled.div`
    position: relative;

    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.3), rgba(0,0,0, 0.8));
    }
`;

const Logo = styled.div`
    position: fixed;
    top: 2rem;
    left: 5rem;
    color: white;
    font-size: 5rem;
    font-weight: 900;
`;

const SignInButton = styled.button`
    position: fixed;
    top: 3rem;
    right: 5rem;
    padding: 1rem 2rem;
    font-size: 1.75rem;
    color: black;
    background-color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

const LoginBody = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
`;

const MainHeader = styled.h1`
    color: white;
    font-size: 6rem;
    text-align: center;
`;

const LargeSubHeader = styled.h2`
    color: white;
    padding-top: 1.5rem;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
`;

const SmallSubHeader = styled.h3`
    color: white;
    padding-top: 3rem;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
`;

const RegisterForm = styled.form`
    display: flex;
    margin-top: 2rem;
`;

const RegisterInput = styled.input`
    width: 75%;
    height: 5rem;
    border: none;
    margin-right: 0.2rem;
    font-size: 1.75rem;
    text-indent: 1rem;
`;

const RegisterButton = styled.button`
    width: 25%;
    height: 5rem;
    background-color: white;
    border: none;
    font-size: 1.75rem;
    cursor: pointer;
`;

const BackgroundGradient = styled.img`
    width: 100%;
    height: 100vh;
`;