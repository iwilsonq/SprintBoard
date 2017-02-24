import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing container">
        {this.props.children}
      </div>
    );
  }
}

export default Landing;
