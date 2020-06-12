import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../components/CentralListOfCategories01';
import CentralListOfCategories02 from '../../../../components/CentralListOfCategories02';
import CentralCard02 from '../../../../components/CentralCard02';

import MicOti1 from '../../../../img/microscopy-nsit0108-01 1.png';
import MicOti2 from '../../../../img/microscopy-nsit0108-01 2.png';
import MicOti3 from '../../../../img/microscopy-nsit0108-01 3.png';
import MicOti4 from '../../../../img/microscopy-nsit0108-01 5.png';
import MicOti5 from '../../../../img/microscopy-nsit0108-01 8.png';
import MicElet1 from '../../../../img/microscopy-nsit0108-01 9.png';
import MicElet2 from '../../../../img/microscopy-yliv-01 8.png';
import MicElet3 from '../../../../img/microscopy-yliv-01 9.png';

import MicOti6 from '../../../../img/microscopy-yliv-01 1.png';
import MicOti7 from '../../../../img/microscopy-yliv-01 2.png';
import MicOti8 from '../../../../img/microscopy-yliv-01 3.png';
import MicOti9 from '../../../../img/microscopy-yliv-01 4.png';
import MicOti10 from '../../../../img/microscopy-yliv-01 5.png';
import MicOti11 from '../../../../img/microscopy-yliv-01 6.png';
import MicOti12 from '../../../../img/microscopy-yliv-01 7.png';
import MicOti13 from '../../../../img/microscopy-nsit0108-01 4.png';
import MicOti14 from '../../../../img/microscopy-nsit0108-01 6.png';
import MicOti15 from '../../../../img/microscopy-nsit0108-01 7.png';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Microscópios eletrônicos">
          <CentralListOfCategories02 title="">
            <CentralCard02
              title="Microscópio eletrônico de varredura"
              imgSrc={MicElet1}
              imgAlt="Microscope"
              route="/page-02"
            />
            <CentralCard02
              title="Microscópio eletrônico digital"
              imgSrc={MicElet2}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio eletrônico digital"
              imgSrc={MicElet3}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Microscópios óticos">
          <CentralListOfCategories02 title="">
            <CentralCard02
              title="Microscópio ótico trinocular"
              imgSrc={MicOti1}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico monocular"
              imgSrc={MicOti2}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio estereoscópio"
              imgSrc={MicOti3}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio estereoscópio"
              imgSrc={MicOti4}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico monocular"
              imgSrc={MicOti5}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico monocular"
              imgSrc={MicOti6}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico"
              imgSrc={MicOti7}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico monocular"
              imgSrc={MicOti8}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio biológico monocular"
              imgSrc={MicOti9}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico monocular"
              imgSrc={MicOti10}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico"
              imgSrc={MicOti11}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio biológico monocular"
              imgSrc={MicOti12}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio biológico monocular"
              imgSrc={MicOti13}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio ótico trinocular"
              imgSrc={MicOti14}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
            <CentralCard02
              title="Microscópio biológico monocular"
              imgSrc={MicOti15}
              imgAlt="Microscópio ótico"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
