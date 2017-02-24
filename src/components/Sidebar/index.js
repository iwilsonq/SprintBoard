import React, { Component } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const menuItems = [
  {
    name: 'SprintBoard',
    icon: 'dashboard'
  },
  {
    name: 'Tasks',
    icon: 'check'
  },
  {
    name: 'Notifications',
    icon: 'notifications'
  },
  {
    name: 'Subscribers',
    icon: 'email'
  },
];

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarMenu menuItems={menuItems} />
      </div>
    );
  }
}

export default Sidebar;
