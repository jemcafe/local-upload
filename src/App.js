import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// Components
import Uploader from './Uploader/Uploader';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Uploader />
      </div>
    );
  }
}

export default App;