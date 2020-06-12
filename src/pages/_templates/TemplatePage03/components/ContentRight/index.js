import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../../components/SideBarList';
import SideBarCard01 from '../../../../../components/SideBarCard01';
import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Template Title 01">
        <SideBarCard01
          title="LMP"
          subtitle="Laboratório de Mecânica de Precisão"
          imgPath={Lmp}
          route="/template-page-01"
        />
        <SideBarCard01
          title="LMP"
          subtitle="Laboratório de Mecânica de Precisão"
          imgPath={Lmp}
          route="/template-page-01"
        />
      </SideBarList>
    </Container>
  );
}
