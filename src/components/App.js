import React, { Component } from 'react';
import Sidebar from './Sidebar/';
import Landing from './Landing/';
import * as Com from './common/';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Sidebar />
        <Landing>
          <Com.Card />
        </Landing>
      </div>
    );
  }
}

export default App;
