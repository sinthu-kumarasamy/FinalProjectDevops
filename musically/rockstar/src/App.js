import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Appbar from './components/Appbar.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
      </React.Fragment>
    );
  }
}

export default App; 
