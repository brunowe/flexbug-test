import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../../components/SideBarList';
import SideBarItem from '../../../../../components/SideBarItem';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Template Title 01">
        <SideBarItem itemName="Template Item 01" route="/" />
        <SideBarItem itemName="Template Item 02" route="/" />
        <SideBarItem itemName="Template Item 03" route="/" />
      </SideBarList>
      <SideBarList title="Template Title 02">
        <SideBarItem itemName="Template Item 01" route="/" />
        <SideBarItem itemName="Template Item 02" route="/" />
        <SideBarItem itemName="Template Item 03" route="/" />
      </SideBarList>
    </Container>
  );
}
