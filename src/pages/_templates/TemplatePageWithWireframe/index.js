import React from 'react';

// import { Container } from './styles';
import ContentWrapper from './components/ContentWrapper';
import ContentLeft from './components/ContentLeft';
import ContentRight from './components/ContentRight';
import ContentCenter from './components/ContentCenter';

import FlexNavbar from './components/FlexNavbar';
import FlexFooter from './components/FlexFooter';

export default function TemplatePageWithWireframe() {
  return (
    <>
      <FlexNavbar />
      <ContentWrapper>
        <ContentLeft />
        <ContentCenter />
        <ContentRight />
      </ContentWrapper>
      <FlexFooter />
    </>
  );
}
