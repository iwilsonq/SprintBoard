import React from 'react';

const LandingHeader = props => {
  return (
    <div className="landing-header row">
      <div className="col s6">
        {props.children}
      </div>
    </div>
  );
};

export default LandingHeader;
