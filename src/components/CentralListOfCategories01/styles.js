import styled from 'styled-components';

export const Container = styled.div`
  display: -webkit-inline-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ddff0066;

  &:last-child {
    margin-bottom: 3rem;
    border-bottom: none;
  }
`;

export const Title = styled.h1`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #495057;
  padding-top: 0.5rem;
  padding-left: 0.25rem;
  padding-bottom: 0.25rem;
`;
