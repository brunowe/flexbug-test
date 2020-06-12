import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../../components/CentralListOfCategories01';
import CentralCard02 from '../../../../../components/CentralCard03';

import Ensaio from '../../img/Ensaio.jpg';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Grupo 01">
          <CentralCard02
            imgSrc={Ensaio}
            imgAlt="Ensaio"
            title="Ensaio de tração"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicite"
          />
          <CentralCard02
            imgSrc={Ensaio}
            imgAlt="Ensaio"
            title="Ensaio de tração"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicite"
          />
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Grupo 02">
          <CentralCard02
            imgSrc={Ensaio}
            imgAlt="Ensaio"
            title="Ensaio de tração"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicite"
          />
          <CentralCard02
            imgSrc={Ensaio}
            imgAlt="Ensaio"
            title="Ensaio de tração"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicite"
          />
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Grupo 03">
          <CentralCard02
            imgSrc={Ensaio}
            imgAlt="Ensaio"
            title="Ensaio de tração"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicite"
          />
          <CentralCard02
            imgSrc={Ensaio}
            imgAlt="Ensaio"
            title="Ensaio de tração"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicite"
          />
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
