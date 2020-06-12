import React from 'react';

import { Container, SideBarItem, InfoText, InfoTitle } from './styles';

export default function SideBarCard02(props) {
  return (
    <>
      <Container target="_blank" rel="noopener noreferrer" href={props.route}>
        <SideBarItem>
          <img src={props.imgPath} alt="" />
          <InfoTitle>
            {props.title}
            <p>{props.subtitle}</p>
          </InfoTitle>
        </SideBarItem>
        <InfoText>{props.text}</InfoText>
      </Container>
    </>
  );
}
