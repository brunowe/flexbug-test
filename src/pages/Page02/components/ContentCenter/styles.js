import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;

  @media (min-width: 768px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const Title = styled.div`
  padding: 0.5rem 0.5rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ddff00;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
`;
