import React from 'react';

import { Container, Img, Body, Title } from './styles';

export default function CentralCard01(props) {
  return (
    <Container to={props.route}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
      <Body>
        <Title>{props.title}</Title>
      </Body>
    </Container>
  );
}
