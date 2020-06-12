import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  position: relative;
  display: -webkit-inline-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  height: 100% !important;
  border-radius: 0.25rem;
  margin: 0.325rem;
  text-decoration: none;
  width: 62px;
  word-break: normal;

  &:hover {
    text-decoration: none;
  }
`;

export const Img = styled.div`
  padding: 0px 0px 0px 0px;
  border-radius: calc(0.25rem - 1px);
  border: 1px solid #ddd;

  img {
    width: 62px;
    height: 62px;

    filter: grayscale(1);

    &:hover {
      filter: grayscale(1) sepia(0.75) hue-rotate(25deg);
    }
  }
`;

export const Title = styled.p`
  font-size: 11px;
  color: #aaa;
  line-height: 1.15;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  align-self: center;
  padding: 0.25rem;
`;
