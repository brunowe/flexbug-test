import React from 'react';

// import { Container } from './styles';
import ContentWrapper from '../../components/ContentWrapper';
import ContentLeft from './components/ContentLeft';
import ContentCenter from './components/ContentCenter';

export default function Page00() {
  return (
    <ContentWrapper>
      <ContentLeft />
      <ContentCenter />
    </ContentWrapper>
  );
}
