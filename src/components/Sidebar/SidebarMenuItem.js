import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions';

const SidebarMenuItem = props => {
  return (
    <Link onClick={() => props.changeRoute({
        path: props.path,
        name: props.name
      })}>
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
    </Link>
  );
};

export default connect(null, { changeRoute })(SidebarMenuItem);
