import React, { Component } from 'react';
import moment from 'moment';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const menuItems = [
  {
    name: 'SprintBoard',
    icon: 'dashboard',
    path: '/'
  },
  {
    name: 'Tasks',
    icon: 'check',
    path: '/tasks'
  },
  {
    name: 'Notifications',
    icon: 'notifications',
    path: '/notifications'
  },
  {
    name: 'Subscribers',
    icon: 'email',
    path: '/subscribers'
  },
];

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-shadow">
        <SidebarHeader
          time={moment().format('LT')}
          date={moment().format('dddd[,] MMM[.] D')}
       />
        <SidebarMenu
          activeRoute={this.props.route}
          menuItems={menuItems}
        />
      </div>
    );
  }
}

export { Sidebar };
