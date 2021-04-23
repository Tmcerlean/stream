import React, { useRef } from 'react';
import styled from 'styled-components';
import { auth } from '../firebase';

const SignIn = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error); 
        })
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error); 
        })
    };

    return (
        <SignInContainer>
            <SignInBackground>
                <Logo>Stream.</Logo>
                <SignInBody>
                    <MainHeader>Sign In</MainHeader>
                    <SignInForm>
                        <SignInInput placeholder='Email or phone number' ref={emailRef}/>
                        <SignInInput placeholder='Password' ref={passwordRef}/>
                        <SignInButton onClick={signIn}>Sign In</SignInButton>
                        <SignInSpan>New to Stream?</SignInSpan>
                        <SignInLink onClick={register}>&nbsp;Sign up now.</SignInLink>
                    </SignInForm>
                </SignInBody>
                <BackgroundGradient />
            </SignInBackground>
        </SignInContainer>
    )
}

export default SignIn;

const SignInContainer = styled.main`
    position: relative;
    height: 100vh;
    background: url('https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/e75c587f-468b-41fb-903d-3ddeccb616be/GB-en-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg') center no-repeat;
    background-size: cover;
    overflow: hidden;
`;

const SignInBackground = styled.div`
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

const SignInBody = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 47.5rem;
    background-color: rgba(0,0,0,0.8);
    padding: 5rem;
`;

const MainHeader = styled.h1`
    color: white;
    font-size: 3rem;
`;

const SignInForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
`;

const SignInInput = styled.input`
    width: 100%;
    height: 5rem;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.75rem;
    text-indent: 2rem;
    background-color: #333333;
`;

const SignInButton = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    background-color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.75rem;
    cursor: pointer;
`;

const SignInSpan = styled.span`
    margin-top: 1rem;
    font-size: 1.5rem;
    color: white;
`;

const SignInLink = styled.span`
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
`;

const BackgroundGradient = styled.img`
    width: 100%;
    height: 100vh;
`;