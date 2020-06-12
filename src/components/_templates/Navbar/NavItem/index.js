import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem(props) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={props.route}>
          {props.item}
        </Link>
      </li>
    </>
  );
}
