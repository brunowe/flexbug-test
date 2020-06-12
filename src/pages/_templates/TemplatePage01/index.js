import React from 'react';

// import { Container } from './styles';
import ContentWrapper from '../../../components/ContentWrapper';
import ContentLeft from './components/ContentLeft';
import ContentCenter from './components/ContentCenter';

export default function TemplatePage01() {
  return (
    <ContentWrapper>
      <ContentLeft />
      <ContentCenter />
    </ContentWrapper>
  );
}
