import React from 'react';
import { Card } from './common';

const SprintBoard = props => {
  return (
    <div className="sprintboard">
      <div className="row">
        <div className="col s6">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col s6">
          <Card category="Category" title="Statistic or Feature" />
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col s4">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col s4">
          <Card category="Category" title="Statistic or Feature" />
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col s3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col s3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
        <div className="col s3">
          <Card category="Category" title="Statistic or Feature" />
        </div>
      </div>
    </div>
  );
};

export default SprintBoard;
