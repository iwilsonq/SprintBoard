import React from 'react';

const CardHeader = props => {
  const colors = ['red-0', 'red-2', 'red-3', 'red-1', 'red-4', 'red-5'];
  const randomIndex = Math.floor(Math.random() * colors.length);

  return (
    <div className={`card-header ${colors[randomIndex]}`}>
      <h2 className="lightfont">A header</h2>
      <p className="lightfont">A description of this card</p>
    </div>
  );
};

export default CardHeader;
