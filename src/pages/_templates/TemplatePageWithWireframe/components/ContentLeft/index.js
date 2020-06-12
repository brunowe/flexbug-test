import React from 'react';
import { Container, Title, List } from './styles';
import SideBarItem from '../../../../../components/SideBarItem';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarItem itemName="Template Item 01" route="/" />
          <SideBarItem itemName="Template Item 02" route="/" />
          <SideBarItem itemName="Template Item 03" route="/" />
        </List>
      </div>
      <div>
        <Title>Template Title 02</Title>
        <List>
          <SideBarItem itemName="Template Item 01" route="/" />
          <SideBarItem itemName="Template Item 02" route="/" />
          <SideBarItem itemName="Template Item 03" route="/" />
        </List>
      </div>
    </Container>
  );
}
