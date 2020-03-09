import React, { Component } from 'react';
import { render } from 'react-dom';
import FlipImage from './FlipImage';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <FlipImage a="https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg" 
        b="https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
