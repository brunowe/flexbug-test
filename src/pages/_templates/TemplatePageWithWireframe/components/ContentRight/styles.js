import styled from 'styled-components';

export const Container = styled.div`
  margin-right: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  background-color: #f8f9fa !important;
  border-left: 1px solid #dee2e6 !important;
  flex: 0 0 15rem;

  border: solid;
  border-color: #00f;

  max-height: 100%;
  overflow-y: auto;

  @media (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const Title = styled.div`
  padding: 0.5rem 0.5rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;

export const List = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  width: 100%;
`;
