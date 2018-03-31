import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// Components
import Uploader from './Uploader/Uploader';

class App extends Component {

  upload = (e) => {
    e.preventDefault();
    axios.post('/upload').then( res => {
      console.log(res.data);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.upload}>
          <Uploader />
          <div className="btn">
            <input type="submit" style={btn}/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

// CSS
const btn = {
  outline: 'none', 
  background: 'lightgrey', 
  border: 'none', 
  padding: '8px 10px', 
  borderRadius: '4px', 
  cursor: 'pointer'
}