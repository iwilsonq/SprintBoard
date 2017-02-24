import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu = props => {
  return (
    <ul className="sidebar-menu">
      {props.menuItems.map(item => (
        <SidebarMenuItem
          key={item.name}
          {...item}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;
