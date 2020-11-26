import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Div>
            <Link to="/users">
                <IconButton>
                    <PersonIcon className="headerIcon"
                                fontSize="large"/>
                </IconButton>
            </Link>
            <img 
              className="headerLogo"
              src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
              alt="tinderLogo" />
            <Link to="/chat">
                <IconButton>
                    <ForumIcon  className="headerIcon"
                                fontSize="large"
                    />
                </IconButton>
            </Link>
        </Div>
    )
}

export default Header;

const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #f9f9f9;

.headerLogo{
    height: 40px;
    object-fit: contain;
}
.headerIcon{
    padding: 20px;
}
`