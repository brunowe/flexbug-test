import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard02 from '../../../../components/SideBarCard02';
import LCME from '../../img/lcme.PNG';
import Cermat from '../../img/Cermat.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Laboratórios">
        <SideBarCard02
          title="LCME"
          subtitle="Laboratório Central de Microscopia Eletrônica"
          imgPath={LCME}
          route="/template-page-01"
        />
        <SideBarCard02
          imgPath={Cermat}
          title="CERMAT"
          subtitle="Núcleo de Pesquisas em Materiais Cerâmicos e Compósitos"
          route="http://cermat.ufsc.br/"
        />
      </SideBarList>
    </Container>
  );
}
