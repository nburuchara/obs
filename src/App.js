import React, {Component} from 'react';
import LandingPage from './landing/LandingPg'
import GlobalStyles from './CSS/GlobalStyle';
import './App.css';

class App extends Component {
  render () {
    return (
      <>
        <GlobalStyles/>
        <LandingPage/>
      </>
    );
  }
  
}

export default App;
