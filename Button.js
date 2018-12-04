import React, { Component } from 'react';

class Button extends Component {

  speak() {
    console.log("Works!");
  }

  render() {
    return (
    //  <div className="Button">
    // need to include className below so css is linked to <button>
    // before without that but with div tag it changed the colour
    // of the whole div element
      <button className="Button" onClick={this.speak()}>{this.props.label}</button>
    //  </div>
    );
  }
}

export default Button;
