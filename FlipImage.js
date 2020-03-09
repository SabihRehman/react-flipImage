import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class FlipImage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: true
    };
    this.toggleImage = this.toggleImage.bind(this);
  }
  
  toggleImage(){ 
    this.setState({open:!this.state.open})
  }

  getPictureName = () => this.state.open ? this.props.a : this.props.b;

  render() {
    const imageName = this.getPictureName();
    return (
      <div>
        <img style={{maxWidth: '400px', minHeight:'400px'}} src={imageName} onClick={this.toggleImage} />
      </div>
    );
  }
}

export default FlipImage;