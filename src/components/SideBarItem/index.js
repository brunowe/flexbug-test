import React from 'react';

import { Container } from './styles';

export default function SideBarItem(props) {
  return <Container to={props.route}>{props.itemName}</Container>;
}
