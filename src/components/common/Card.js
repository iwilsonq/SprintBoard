import React from 'react';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const Card = props => {
  return (
    <div className="card">
      <CardHeader />
        <p>Category</p>
        <h3>Statistic / Feature</h3>
      <CardFooter>
        <p>I am the card footer</p>
      </CardFooter>
    </div>
  );
};

export { Card };
