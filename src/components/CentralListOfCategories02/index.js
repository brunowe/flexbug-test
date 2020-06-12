import React from 'react';
import { Container, SubContainer, Title } from './styles';

export default function CentralListOfCategories02(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <SubContainer>{props.children}</SubContainer>
    </Container>
  );
}
