import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Chat({ name, message, timestamp, ProfileUrl }) {
    return (
        <Link to={`/chat/${name}`}>
        <Div>
            <Avatar className="chatImage" alt={name} src={ProfileUrl} />
            <div className="chatDetails">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chatTimestamp">{timestamp}</p>
        </Div>
        </Link>
    )
}

export default Chat;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
height: 70px;
border-bottom: 1px solid #fafafa;

.chatDetails{
    flex: 1;
    p{
        color: gray;
    }
}

.chatImage{
    margin-right: 20px;
}

.chatTimestamp{
    color: lightgray;
}


`

