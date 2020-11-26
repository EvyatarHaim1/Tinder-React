import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';

function Chats() {
    return (
        <Div>
            <Chat
                 name="Sandra"
                 message="Holaaaa" 
                 timestamp="40 sec ago"
                 ProfileUrl="https://yt3.ggpht.com/a-/AOh14Gis2sdSRyGTAbymHYQ1amF0MBacAoQqcKWcKQ=s68-c-k-c0x00ffffff-no-rj-mo"
            />
            <Chat
                 name="Loren"
                 message="Yo what's up?" 
                 timestamp="25 min ago"
                 ProfileUrl="https://yt3.ggpht.com/a-/AOh14GjkJqRT5nI08JTg8S0THUFmqKzBI2eFUzzeqQ=s68-c-k-c0x00ffffff-no-rj-mo"
            />
            <Chat
                 name="Anna"
                 message="Hey there..." 
                 timestamp="3 days ago"
                 ProfileUrl="https://yt3.ggpht.com/a-/AOh14Gj4ArdudQU8dH0ve7CGb26IVCvPX7nSktUUsw=s68-c-k-c0x00ffffff-no-rj-mo"
            />
            <Chat
                 name="Mary"
                 message="Are you a musician for living?" 
                 timestamp="3 days ago"
                 ProfileUrl="https://yt3.ggpht.com/a-/AOh14Gjbu_R3kOHYSBungivZ74ysvupMRIApol9uQg=s68-c-k-c0x00ffffff-no-rj-mo"
            />
            <Chat
                 name="Bethany"
                 message="are you still in the area?" 
                 timestamp="4 days ago"
                 ProfileUrl="https://yt3.ggpht.com/a-/AOh14Gj4dVReRAE6AFVKXElK52lPcSamAhdkNrdOpQ=s68-c-k-c0x00ffffff-no-rj-mo"
            />
        </Div>
    )
}

export default Chats;

const Div = styled.div``
