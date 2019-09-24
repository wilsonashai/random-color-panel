import React, { Component } from 'react';
import randomColor from 'randomcolor';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: randomColor({
          hue: this.props.hue
        })
      }
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let newColor = randomColor({
      hue: this.props.hue
    });
    this.setState({
        style: {
          backgroundColor: newColor
      }
    });
  }

  render() {

    return (
      <div className="panel" onClick={this.changeColor} style={this.state.style}>
      </div>
    )
  }
}



export default Panel;
