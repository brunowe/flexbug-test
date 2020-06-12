import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard02 from '../../../../components/SideBarCard02';

import LMP from '../../img/lmp.png';
import LCME from '../../img/lcme.PNG';
import Cermat from '../../img/Cermat.png';
import LabMat from '../../img/labmat.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Laboratórios">
        <SideBarCard02
          imgPath={LCME}
          title="LCME"
          subtitle="Laboratório Central de Microscopia Eletrônica"
          route="https://lcme.ufsc.br/"
        />
        <SideBarCard02
          imgPath={Cermat}
          title="CERMAT"
          subtitle="Núcleo de Pesquisas em Materiais Cerâmicos e Compósitos"
          route="http://cermat.ufsc.br/"
        />
        <SideBarCard02
          imgPath={LabMat}
          title="LabMat"
          subtitle="Laboratório de Materiais"
          route="https://www.linkedin.com/company/labmat---laborat-rio-de-materiais/?originalSubdomain=br"
        />
        <SideBarCard02
          imgPath={LMP}
          title="LMP"
          subtitle="Laboratório de Mecânica de Precisão"
          route="https://www.linkedin.com/company/labmat---laborat-rio-de-materiais/?originalSubdomain=br"
        />
      </SideBarList>
    </Container>
  );
}
