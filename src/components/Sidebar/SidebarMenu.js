import React, { Component } from 'react';
import SidebarMenuItem from './SidebarMenuItem';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: props.menuItems[0].name
    };
  }

  componentDidMount() {
    document.querySelector('.sidebar-menu').firstChild.classList.add('active');
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.activeMenuItem !== nextState.activeMenuItem) {
      document.querySelector(`[name=${this.state.activeMenuItem}]`).classList.remove('active');
      document.querySelector(`[name=${nextState.activeMenuItem}]`).classList.add('active');
    }
  }

  onMenuItemClick(item) {
    this.setState({ activeMenuItem: item });
  }

  render() {
    return (
      <ul className="sidebar-menu">
        {this.props.menuItems.map(item => (
          <SidebarMenuItem
            onClick={this.onMenuItemClick.bind(this, item.name)}
            key={item.name}
            {...item}
          />
        ))}
      </ul>
    );
  }
};

export default SidebarMenu;
