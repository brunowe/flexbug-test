import React from 'react';

import { Container, Img, Body, Title } from './styles';

export default function CentralCard01(props) {
  return (
    <Container to={props.route}>
      <Img>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </Img>

      <Body>
        <Title>{props.title}</Title>
      </Body>
    </Container>
  );
}
