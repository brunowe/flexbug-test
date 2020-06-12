import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard01 from '../../../../components/SideBarCard01';

import News1 from '../../img/new1.png';
import News2 from '../../img/new2.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Notícias">
        <SideBarCard01
          date="06/06/2020"
          title="Análise clínica em MEV"
          subtitle="Pesquisador avalia alternativas para vacina contra a COVID-19 em análise conduzida em microscópio eletrônico de varredura."
          imgPath={News1}
          url=""
        />
        <SideBarCard01
          date="27/02/2020"
          title="Descoberta utilizando MEV"
          subtitle="Com análise conduzida em microscópio eletrônico de varredura, pesquisadora identifica composição de novo material magnético."
          imgPath={News2}
          url=""
        />
      </SideBarList>
    </Container>
  );
}
