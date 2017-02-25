import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions';
import SidebarMenuItem from './SidebarMenuItem';

class SidebarMenu extends Component {
  componentDidMount() {
    document.querySelector('.sidebar-menu')
    .firstChild.firstChild.classList.add('active');
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.activeRoute !== nextProps.activeRoute) {
      document.querySelector(`[name=${this.props.activeRoute.name}]`).classList.remove('active');
      document.querySelector(`[name=${nextProps.activeRoute.name}]`).classList.add('active');
    }
  }

  onMenuItemClick(item) {
    const { name, path } = item;
    this.props.changeRoute({
      name,
      path
    });
  }

  render() {
    return (
      <ul className="sidebar-menu">
        {this.props.menuItems.map(item => (
          <SidebarMenuItem
            onClick={this.onMenuItemClick.bind(this, item)}
            key={item.name}
            {...item}
          />
        ))}
      </ul>
    );
  }
};

export default connect(null, { changeRoute })(SidebarMenu);
