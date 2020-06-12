import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  position: relative;
  display: -webkit-inline-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  word-break: normal;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  height: 100% !important;
  border-radius: 0.25rem;
  margin: 0.325rem;
  margin-right: 25px !important;
  text-decoration: none;
  width: 146px;
  text-align: center;
  &:hover {
    text-decoration: none;
  }
`;

export const Img = styled.div`
  padding: 5px 23px 5px 23px;
  border-radius: calc(0.25rem - 1px);
  border: 1px solid #ddd;

  img {
    width: 100px;
    height: 100px;

    filter: grayscale(1);

    &:hover {
      filter: grayscale(1) sepia(0.75) hue-rotate(25deg);
    }
  }
`;

export const Title = styled.p`
  font-size: 0.875rem;
  color: #888;
  line-height: 1.15;

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
