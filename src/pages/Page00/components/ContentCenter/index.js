import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../components/CentralListOfCategories01';
import CentralListOfCategories02 from '../../../../components/CentralListOfCategories02';
import CentralCard01 from '../../../../components/CentralCard01';

import Furadeira from '../../../../img/manufacturing-macrovector_oficial-01 1.png';
import TornoVert from '../../../../img/manufacturing-macrovector_oficial-01 2.png';
import TornoConv1 from '../../../../img/manufacturing-macrovector_oficial-01 3.png';
import FresaConv1 from '../../../../img/manufacturing-macrovector_oficial-01 4.png';
import RetifPLan from '../../../../img/manufacturing-macrovector_oficial-01 7.png';
import TornoCNC1 from '../../../../img/manufacturing-macrovector-02-c 1.png';
import CorteLaser from '../../../../img/manufacturing-macrovector-02-c 9.png';
import FurBanc1 from '../../../../img/manufacturing-macrovector-02-c 5.png';
import Esteira from '../../../../img/manufacturing-microone-01 1.png';
import RetifBanc from '../../../../img/manufacturing-microone-01 4.png';
import Brac1 from '../../../../img/manufacturing-microone-01 2.png';
import Brac2 from '../../../../img/manufacturing-microone-01 3.png';
import Brac3 from '../../../../img/manufacturing-microone-01 8.png';
import Reat1 from '../../../../img/analysis-macrovector-01 9.png';
import Reat2 from '../../../../img/analysis-macrovector-01 11.png';
import Reat3 from '../../../../img/analysis-macrovector-01 10.png';
import Extrus from '../../../../img/manufacturing-microone-01 5.png';
import FresaConv2 from '../../../../img/manufacturing-macrovector-02-c 2.png';
import TornoConv2 from '../../../../img/image 1.png';
import TornoCNC2 from '../../../../img/manufacturing-macrovector_oficial-02 3.png';
import FurBanc2 from '../../../../img/manufacturing-microone-01 7.png';
/**
import FurBanc2 from '../../../../img/image 3.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector_oficial-01 5.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector_oficial-01 6.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector_oficial-02 1.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector_oficial-02 2.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector_oficial-01 4.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector-02-c 3.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector-02-c 4.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector-02-c 6.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector-02-c 7.png';
import FurBanc2 from '../../../../img/manufacturing-macrovector-02-c 8.png';
import FurBanc2 from '../../../../img/manufacturing-microone-01 6.png';
*/

import microscope from '../../img/microscope.png';
import Vidraria from '../../../../img/analysis-macrovector-01 1.png';
import Decant from '../../../../img/analysis-macrovector-01 2.png';
import Balanca1 from '../../../../img/analysis-macrovector-01 3.png';
import Espect1 from '../../../../img/analysis-macrovector-01 4.png';
import CentrifTub from '../../../../img/analysis-macrovector-01 6.png';
import Analis1 from '../../../../img/analysis-macrovector-01 7.png';
import Evap from '../../../../img/analysis-macrovector-01 8.png';
import Analis2 from '../../../../img/analysis-macrovector-03 3.png';
import BancEns from '../../../../img/analysis-macrovector-03 2.png';
import Espect2 from '../../../../img/analysis-macrovector-02-b 7.png';
import Proveta from '../../../../img/analysis-macrovector-02-b 5.png';
import AquecMag from '../../../../img/analysis-macrovector-02-b 6.png';
import TubEns from '../../../../img/analysis-macrovector-02-b 4.png';
import CapsPor from '../../../../img/analysis-macrovector-02-b 1.png';
import Balanca2 from '../../../../img/analysis-macrovector-02-b 16.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 14.png';

/**
import Centrif from '../../../../img/analysis-macrovector-01 5.png';
import Centrif from '../../../../img/analysis-macrovector-01 12.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 2.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 3.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 8.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 9.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 10.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 11.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 12.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 13.png';
import Centrif from '../../../../img/analysis-macrovector-02-b 15.png';
import Centrif from '../../../../img/analysis-macrovector-03 1.png';
import Centrif from '../../../../img/analysis-macrovector-03 4.png';

*/

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Fabricação e prototipagem">
          <CentralListOfCategories02 title="Mecânica">
            <CentralCard01
              title="Furadeira de bancada"
              imgSrc={Furadeira}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno vertical"
              imgSrc={TornoVert}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno convencional"
              imgSrc={TornoConv1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Fresadora convencional"
              imgSrc={FresaConv1}
              imgAlt="Microscope"
              route="/"
            />

            <CentralCard01
              title="Retíficadora plana"
              imgSrc={RetifPLan}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno CNC"
              imgSrc={TornoCNC1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Corte a Laser"
              imgSrc={CorteLaser}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Furadeira de bancada"
              imgSrc={FurBanc1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Esteira"
              imgSrc={Esteira}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Retificadora de bancada"
              imgSrc={RetifBanc}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Braço robótico industrial"
              imgSrc={Brac1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Braço robótico industrial"
              imgSrc={Brac2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Braço robótico industrial"
              imgSrc={Brac3}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Extrusora"
              imgSrc={Extrus}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Fresadora convencional"
              imgSrc={FresaConv2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno Convencional"
              imgSrc={TornoConv2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno CNC"
              imgSrc={TornoCNC2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Furadeira de bancada"
              imgSrc={FurBanc2}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="Elétrica">
            <CentralCard01
              title="Reator de Plasma"
              imgSrc={Reat1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Reator de plasma"
              imgSrc={Reat2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Microreator de plasma"
              imgSrc={Reat3}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Medição e análise">
          <CentralListOfCategories02 title="Microscopia">
            <CentralCard01
              title="Microscópios"
              imgSrc={microscope}
              imgAlt="Microscope"
              route="/page-01"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="Química">
            <CentralCard01
              title="Vidrarias"
              imgSrc={Vidraria}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Decantadores"
              imgSrc={Decant}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Balança analítica"
              imgSrc={Balanca1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Balança de precisão"
              imgSrc={Balanca2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Espectrômetro de massa"
              imgSrc={Espect1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Centrífuga para tubos"
              imgSrc={CentrifTub}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Analisador FTIR e NDIR"
              imgSrc={Analis1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Evaporador"
              imgSrc={Evap}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Análise de composição"
              imgSrc={Analis2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Bancada de ensaios"
              imgSrc={BancEns}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Especto-fotômetro"
              imgSrc={Espect2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Aquecedor magnético"
              imgSrc={AquecMag}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Provetas"
              imgSrc={Proveta}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Tubos de ensaio"
              imgSrc={TubEns}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Cápsula de porcelana"
              imgSrc={CapsPor}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Especto-fotômetro"
              imgSrc={Espect2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Centrífuga"
              imgSrc={Centrif}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
