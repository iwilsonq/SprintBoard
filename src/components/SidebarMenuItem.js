import React from 'react';

const SidebarMenuItem = props => {
  return (
    <li
      className="menu-item p-t-b-16 p-l-r-32"
      name={props.name}
      onClick={props.onClick}
    >
      <div className="icon m-r-8">
        <i className="material-icons">{props.icon}</i>
      </div>
      <div className="item-name">
        {props.name}
      </div>
    </li>
  );
};

export default SidebarMenuItem;
