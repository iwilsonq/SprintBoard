import React, { Component } from 'react';
import LandingHeader from './LandingHeader';

class Landing extends Component {
  render() {
    return (
      <div className="landing container" style={{ marginLeft: 195}}>
        <LandingHeader>
          <h1 className="lightfont">SprintBoard</h1>
        </LandingHeader>
        {this.props.children}
      </div>
    );
  }
}

export default Landing;
