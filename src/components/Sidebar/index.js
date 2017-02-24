import React, { Component } from 'react';
import moment from 'moment';
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
      <div className="sidebar sidebar-shadow">
        <SidebarHeader time={moment().format('LT')} date={moment().format('dddd[,] MMM[.] D')} />
        <SidebarMenu menuItems={menuItems} />
      </div>
    );
  }
}

export default Sidebar;
