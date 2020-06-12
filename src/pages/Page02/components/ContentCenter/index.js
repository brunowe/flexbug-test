import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../components/CentralListOfCategories01';
import CentralCard02 from '../../../../components/CentralCard03';

import MEV from '../../img/mev.PNG';
import GrainSize from '../../img/grain-size.PNG';
import Composition from '../../img/composition.PNG';
import FailureAnalysis from '../../img/failure-analysis.PNG';

import Equipment01 from '../../img/microscope-01.PNG';
import Equipment02 from '../../img/microscope-02.PNG';
import Equipment03 from '../../img/microscope-03.PNG';
import Equipment04 from '../../img/microscope-04.PNG';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Microscopia Eletrônica de Varredura</Title>
      <Body>
        <CentralListOfCategories01 title="Serviços">
          <CentralCard02
            imgSrc={MEV}
            imgAlt="Microscopia Eletrônica de Varredura"
            title="Aquisição de imagem em amostra padronizada"
            text="Imagens de elétrons e raios-x, juntamente com análises químicas in situ de elementos principais
            e secundários mais pesados que o carbono."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicitar"
          />
          <CentralCard02
            imgSrc={FailureAnalysis}
            imgAlt="Análise de falha por microscopia eletrônica de varredura"
            title="Aquisição de imagem para análise de falha"
            text="Avaliação de contornos e profundidade de superfícies
            desgastadas e identificação de regiões críticas."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicitar"
          />
          <CentralCard02
            imgSrc={GrainSize}
            imgAlt="Distribuição do tamanho das partículas"
            title="Análise de distribuição do tamanho de partículas"
            text="Medição do tamanho das partículas na amostra e exibição dos
            dados utilizando histograma."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicitar"
          />
          <CentralCard02
            imgSrc={Composition}
            imgAlt="Avaliação da composição química"
            title="Avaliação da composição química"
            text="Análises químicas in situ de elementos principais
            e secundários mais pesados que o carbono."
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Solicitar"
          />
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Equipamentos">
          <CentralCard02
            imgSrc={Equipment01}
            imgAlt="Microscópio Eletrônico de Varredura"
            title="JEM-1011 TEM (TEM 100 kV)"
            text="Destinado a análises de sistemas orgânicos/biológicos e poliméricos.
            • Voltagem de aceleração máxima: 100 kV
            • Resolução para imagem de ponto: 0,45 nm
            • Resolução para imagem de linha: 0,20 nm
            • Magnificação: 800x a 600.000x
            • Estágio goniométrico com módulo de inclinação de ±20º
            • Difração de elétrons"
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Reservar"
          />
          <CentralCard02
            imgSrc={Equipment02}
            imgAlt="Microscópio Eletrônico de Varredura"
            title="JEM-2100 TEM (TEM 200kV)"
            text="Destinado a análises de materiais semicondutores, metais e cerâmicos.
            • Voltagem de aceleração máxima: 200 kV
            • Magnificação: 2.000x a 1.200.000x
            • Resolução de ponto de 0,23 nm; resolução de linha de 0,14 nm
            • Estágio goniométrico com módulo de inclinação duplo de ±30º
            • Análise de raios-x (EDS): sistema de espectrometria por dispersão de energia
            • Difração de elétrons SAD e NBD
            • Difração de feixe convergente (CBD)"
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Reservar"
          />
          <CentralCard02
            imgSrc={Equipment03}
            imgAlt="Microscópio Eletrônico de Varredura"
            title="JEOL JSM-6390LV"
            text="• Microscópio de varredura convencional com filamento de tungstênio
            • Voltagem de aceleração: 0.5 a 30kV
            • Magnificação: 25x a 300.000x
            • Resolução a alta tensão: 3nm; baixa tensão: 4nm.
            • Modo baixo vácuo incluído– Permite observar amostras com excesso de água
            • Acomoda amostras de até 15 cm de diâmetro
            • Modo filmagem (arquivos .avi)
            • Análise de raios-x (EDS): sistema de espectrometria por dispersão de energia"
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Reservar"
          />
          <CentralCard02
            imgSrc={Equipment04}
            imgAlt="Microscópio Eletrônico de Varredura"
            title="JEOL JSM-6701F"
            text="• Catodo frio: Emissão de campo (FESEM)
            • Ultra alto vácuo
            • Alta resolução: 1nm(30kV) – 2.2nm (1.2kV)
            • Tensão de aceleração: 0.5 a 30kV
            • Magnificação: 25x a 650.000x"
            contact="(48)999999999"
            route="/template-page-01"
            buttonText="Reservar"
          />
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
