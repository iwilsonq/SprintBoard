import React, { Component } from 'react';
import axios from 'axios';
import { Card, Table } from './common';

const ax = axios.create({
  baseURL: 'https://journies.herokuapp.com'
});

class Subscribers extends Component {
  state = {
    subscribers: []
  };

  componentDidMount() {
    ax.get('/subscribers')
      .then(res => res.data)
      .then(subscribers => this.setState({ subscribers }));
  }

  render() {
    return (
      <div className="subscribers">
        <div className="row">
          <div className="col s2"></div>
          <div className="col s8">
            <Table
              title="Subscriber Emails"
              description="A list of subscribers to The Stoic Developer"
              subscribers={this.state.subscribers}
            />
          </div>
          <div className="col s2"></div>
        </div>
      </div>
    );
  }
}

export default Subscribers;
