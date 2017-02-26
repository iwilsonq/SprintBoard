import React from 'react';

const TableRow = props => {
  return (
    <div className="table-row">
      <div className="row-id">{props.index}</div>
      <div className="row-data">{props.email}</div>
    </div>
  );
};

export default TableRow;
