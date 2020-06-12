import React from 'react';
import { NavLink } from './styles';

export default function NavItem(props) {
  return (
    <li>
      <NavLink to={props.route}>{props.item}</NavLink>
    </li>
  );
}
