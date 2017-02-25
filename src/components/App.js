import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar/';
import Landing from './Landing';
import * as Com from './common/';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Sidebar route={this.props.route} />
        <Landing route={this.props.route}>
          {React.cloneElement(this.props.children, this.props)}
        </Landing>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { route } = state;
  return {
    route
  };
}

export default connect(mapStateToProps)(App);
