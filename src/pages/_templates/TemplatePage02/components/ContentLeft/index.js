import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../../components/SideBarList';
import SideBarCard02 from '../../../../../components/SideBarCard02';
import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Template Title 01">
        <SideBarCard02
          title="LABSOLDA"
          subtitle="Instituto de Soldagem e Mecatrônica"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          imgPath={Lmp}
          route="/template-page-03"
        />
      </SideBarList>
    </Container>
  );
}
