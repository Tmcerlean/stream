import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navigation = () => {

    const [show, setShow] = useState(true);
    const history = useHistory()

    const transitionNavigation = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavigation);

        return () => {
            window.removeEventListener('scroll', transitionNavigation);
        }
    }, []);

    return (
        <NavigationContainer show={show}>
            <Logo onClick={() => history.push('/')}>Stream.</Logo>
            <TextLinkBlock>
                <TextLink>Home</TextLink>
                <TextLink>Series</TextLink>
                <TextLink>Films</TextLink>
                <TextLink>Popular</TextLink>
                <TextLink>My List</TextLink>
            </TextLinkBlock>
            <UserLinkBlock>
                <SearchIconStyled style={{ fontSize: 50 }} />
                <RedeemIconStyled style={{ fontSize: 50 }} />
                <NotificationsIconStyled style={{ fontSize: 50 }} />
                <ProfileLinkBlock>
                    <UserAvatar onClick={() => history.push('/profile')} src="https://occ-0-2585-1167.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ3MDACwIkb75QyhEKYiqUIobApOgfIq_-e7vpHBbOThrbSPEGRNfbb5eIJV6R8dETkd-jLbJucne2M8bAGKqRU.png?r=517"/>
                    <ArrowDropDownIconStyled style={{ fontSize: 28 }} />
                </ProfileLinkBlock>
            </UserLinkBlock>
        </NavigationContainer>
    )
}

export default Navigation;

const NavigationContainer = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    height: 7rem;
    width: 100%;
    z-index: 1;
    padding: 0 5rem;
    background: ${props => props.show ? "var(--dark-grey-1)" : "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))"};

    transition-timing-function: ease-in;
    transition: all 0.5s;
`;

const Logo = styled.div`
    color: white;
    font-size: 3rem;
    font-weight: 900;
    cursor: pointer;
`;

const TextLinkBlock = styled.div`
    display: flex;
    padding-left: 5rem;
`;

const TextLink = styled.div`
    padding-right: 2rem;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`;

const UserLinkBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const SearchIconStyled = styled(SearchIcon)`
    color: white;
    padding-right: 2.5rem;
    cursor: pointer;
`;

const RedeemIconStyled = styled(RedeemIcon)`
    color: white;
    padding-right: 2.5rem;
    cursor: pointer;
`;

const NotificationsIconStyled = styled(NotificationsIcon)`
    color: white;
    padding-right: 2.5rem;
    cursor: pointer;
`;

const ProfileLinkBlock = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const UserAvatar = styled.img`
    box-sizing: border-box;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    object-fit: cover;
    cursor: pointer;
`;

const ArrowDropDownIconStyled = styled(ArrowDropDownIcon)`
    color: white;
`;