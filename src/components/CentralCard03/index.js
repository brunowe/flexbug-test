import React from 'react';
import { Container, Body } from './styles';

export default function CentralCard02(props) {
  return (
    <Container>
      <img src={props.imgSrc} alt="" />
      <Body>
        <div>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>

        <a href={props.route} target="_blank" rel="noopener noreferrer">
          {props.buttonText} &raquo;
        </a>
      </Body>
    </Container>
  );
}
