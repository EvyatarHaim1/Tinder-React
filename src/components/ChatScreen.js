import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {
    
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'sandra',
            image: 'https://yt3.ggpht.com/a-/AOh14Gj4dVReRAE6AFVKXElK52lPcSamAhdkNrdOpQ=s68-c-k-c0x00ffffff-no-rj-mo',
            message: 'holaaaa'
        },
        {
            name: 'sandra',
            image: 'https://yt3.ggpht.com/a-/AOh14Gj4dVReRAE6AFVKXElK52lPcSamAhdkNrdOpQ=s68-c-k-c0x00ffffff-no-rj-mo',
            message: 'como estas?'
        },
        {
            message: `I'm great! what about you?`
        }
    ])

    const handleSend = (e) => {
      e.preventDefault();
      setMessages([...messages, {message: input} ]);
      setInput('');
    }

    return (
        <Div>
            <p className="chatScreen_timestamp">YOU MATCH WITH ELLEN ON 10/8/20</p>
            {messages.map(message => (
                message.name ? (
                <div className="chatScreen_message">
                    <Avatar
                           className="chatScreen_Avatar"
                           alt={message.name}
                           src={message.image}
                    />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            ))}

                <form className="chatScreen_Input">
                    <input  value={input}
                            onChange={e => setInput(e.target.value)}
                            className="chatScreen_InputField"
                            type="text" 
                            placeholder="Type a message"/>
                    <button onClick={handleSend}
                            className="chatScreen_btn">
                        SEND
                    </button>
                </form>
        </Div>
    )
}

export default ChatScreen;

const Div = styled.div`

.chatScreen_message{
    display: flex;
    align-items: center;
    padding: 20px;
}
.chatScreen_text{
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
}

.chatScreen_timestamp{
    text-align: center;
    padding: 20px;
    color: gray;
}
.chatScreen_textUser{
    margin-left: auto;
    background-color: #29b3cd;
    padding: 15px;
    border-radius: 20px;
    color: white;
}

.chatScreen_Input{
  display: flex;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgray;
}
.chatScreen_InputField{
    flex: 1;
    padding: 10px;
    border: none;
}

.chatScreen_btn{
    border: none;
    margin-right: 20px;
    background-color: white;
    font-weight: bolder;
    color: #fe3d71;
}
`
