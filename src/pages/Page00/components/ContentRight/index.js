import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard01 from '../../../../components/SideBarCard01';
import SideBarCard02 from '../../../../components/SideBarCard02';
import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Template Title 01">
        <SideBarCard01
          title="LMP"
          subtitle="Laboratório de Mecânica de Precisão"
          imgPath={Lmp}
          route="/"
        />
      </SideBarList>
      <SideBarList title="Template Title 02">
        <SideBarCard02
          title="LABSOLDA"
          subtitle="Instituto de Soldagem e Mecatrônica"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          imgPath={Lmp}
          route="/"
        />
      </SideBarList>
    </Container>
  );
}
