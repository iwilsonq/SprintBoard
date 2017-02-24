import React from 'react';

const SidebarHeader = props => {
  return (
    <div className="sidebar-header p-t-b-32 p-l-r-16">
      <h1 className="lightfont text-center">{props.time}</h1>
      <h3 className="lightfont text-center m-t-b-8">{props.date}</h3>
    </div>
  );
};

export default SidebarHeader;
