import React from 'react';

const TableHeader = props => {
  return (
    <div className="card-header success">
      <h2 className="lightfont">{props.title}</h2>
      <p className="lightfont">{props.description}</p>
    </div>
  );
};

export default TableHeader;
