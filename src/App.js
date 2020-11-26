import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';


function App() {

  return (
    <Div className="App">
      <Router>

          <Switch>

              <Route path="/chat/:person">
                  <Header backButton="/chat" />
                  <ChatScreen />
              </Route> 
              <Route path="/chat">
                  <Header backButton="/" />
                  <Chats />
              </Route>  

              <Route path="/users">
                  <Header /> 
              </Route>  

              <Route path="/">
                  <Header />
                  <TinderCards />
                  <SwipeButtons />
              </Route>  
          </Switch>
      </Router>
    </Div>
  );
}

export default App;

const Div = styled.div``