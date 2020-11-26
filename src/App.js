import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';


function App() {

  return (
    <Div className="App">
      <Router>

      <Header />

          <Switch>
              <Route path="/chat">
                
              </Route>  

              <Route path="/users">
                
              </Route>  

              <Route path="/">
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