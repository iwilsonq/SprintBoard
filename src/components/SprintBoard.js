import React from 'react';
import { Card } from './common';

const SprintBoard = props => {
  return (
    <div className="sprintboard">
      <div className="row">
        <div className="col l6">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col l6">
          <Card category="Category" title="Statistic or Feature" />
        </div>
      </div>
      <div className="row">
        <div className="col l4">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col l4">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col l4">
          <Card category="Category" title="Statistic or Feature" />
        </div>
      </div>
      <div className="row">
        <div className="col l3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col l3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col l3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col l3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
      </div>
    </div>
  );
};

export default SprintBoard;
