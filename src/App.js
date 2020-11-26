import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';



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
              </Route>  
          </Switch>
      </Router>
    </Div>
  );
}

export default App;

const Div = styled.div``