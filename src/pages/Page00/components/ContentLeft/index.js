import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarItem from '../../../../components/SideBarItem';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Categorias">
        <SideBarItem itemName="Fabricação e prototipagem" route="/" />
        <SideBarItem itemName="Medição e análise" route="/" />
      </SideBarList>
      <SideBarList title="Laboratórios">
        <SideBarItem itemName="CERMAT" route="/" />
        <SideBarItem itemName="GRANTE" route="/" />
        <SideBarItem itemName="GRUCON" route="/" />
        <SideBarItem itemName="LabCet" route="/" />
        <SideBarItem itemName="LABconf" route="/" />
        <SideBarItem itemName="LabMAT" route="/" />
        <SideBarItem itemName="LABMETRO" route="/" />
        <SideBarItem itemName="LABROBÓTICA" route="/" />
        <SideBarItem itemName="LABSOLDA" route="/" />
        <SideBarItem itemName="LabTermo" route="/" />
        <SideBarItem itemName="LABTUCAL" route="/" />
        <SideBarItem itemName="LASHIP" route="/" />
        <SideBarItem itemName="LCM" route="/" />
        <SideBarItem itemName="LEBm" route="/" />
        <SideBarItem itemName="LEPTEN" route="/" />
        <SideBarItem itemName="LMP" route="/" />
        <SideBarItem itemName="LMPT" route="/" />
        <SideBarItem itemName="LVA" route="/" />
        <SideBarItem itemName="NEDIP" route="/" />
        <SideBarItem itemName="NEPET" route="/" />
        <SideBarItem itemName="NIMMA" route="/" />
        <SideBarItem itemName="POLO" route="/" />
        <SideBarItem itemName="SINMEC" route="/" />
        <SideBarItem itemName="USICON" route="/" />
        <SideBarItem itemName="VITROCER" route="/" />
      </SideBarList>
    </Container>
  );
}
