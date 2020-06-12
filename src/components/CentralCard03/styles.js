import styled from 'styled-components';

export const Container = styled.div`
  display: -webkit-inline-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: row;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  width: 48%;

  padding: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;

  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (max-width: 1320px) {
    width: 100%;
    max-width: 500px;
  }

  img {
    border-radius: 0.5rem;
    height: 180px;
    filter: opacity(60%) grayscale(1);
  }

  &:hover {
    img {
      filter: opacity(100%) grayscale(0);
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  margin-left: 15px;
  max-height: 180px;
  align-items: flex-start;

  div {
    overflow-y: auto;
    max-height: 70%;
  }

  h5 {
    font-size: 0.875rem;
    height: 48;
    color: #333333;
  }

  p {
    font-size: 0.875rem;
    width: 100%;
    word-break: normal;
    margin-top: 5px;

    @media (max-width: 400px) {
      display: none;
    }
  }

  a {
    text-align: center;
    vertical-align: middle;
    padding: 0.375rem 0.375rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.125rem;

    color: #fff;
    background-color: #c0c0c0;
    border-color: #c0c0c0;
  }

  a:hover {
    color: #fff;
    background-color: #808080;
    border-color: #808080;
    text-decoration: none;
  }
`;

export const Gap = styled.div`
  padding: 0.5rem 1.25rem;
  height: 2rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;
