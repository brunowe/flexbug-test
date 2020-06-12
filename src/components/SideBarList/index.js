import React from 'react';
import { List, Title } from './styles';

export default function SideBarList(props) {
  return (
    <>
      <Title>{props.title}</Title>
      <List>{props.children}</List>
    </>
  );
}
