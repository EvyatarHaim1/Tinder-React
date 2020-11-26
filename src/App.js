import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Div className="App">
      <Router>

      <Header />

          <Switch>
              <Route path="/chat">
                  <h1>Messafes</h1>
              </Route>  

              <Route path="/users">
                  <h1>users</h1>v
              </Route>  

              <Route path="/">
                  
              </Route>  
          </Switch>
      </Router>
    </Div>
  );
}

export default App;

const Div = styled.div``