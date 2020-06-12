import React from 'react';

import {
  Container,
  Image,
  InfoContainer,
  InfoTitle,
  InfoText,
  Body,
} from './styles';

export default function SideBarCard01(props) {
  return (
    <>
      <Container href={props.url}>
        <InfoContainer>
          <Image src={props.imgPath} alt="" />
          <InfoTitle>
            {props.date}
            <p>{props.title}</p>
          </InfoTitle>
        </InfoContainer>
        <Body>
          <InfoText>{props.subtitle}</InfoText>
        </Body>
      </Container>
    </>
  );
}
