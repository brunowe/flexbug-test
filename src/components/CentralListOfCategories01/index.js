import React from 'react';
import { Container, Title } from './styles';

export default function CentralListOfCategories01(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.children}
    </Container>
  );
}
