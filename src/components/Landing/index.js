import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing p-t-b-32 p-l-r-32">
        {this.props.children}
      </div>
    );
  }
}

export default Landing;
