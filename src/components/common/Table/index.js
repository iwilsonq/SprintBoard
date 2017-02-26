import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = props => {
  return (
    <div className="card">
      <TableHeader {...props} />
      <TableBody subscribers={props.subscribers} />
    </div>
  );
};

export { Table };
