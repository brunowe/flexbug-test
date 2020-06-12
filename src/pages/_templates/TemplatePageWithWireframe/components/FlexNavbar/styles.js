import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: solid;
  border-color: #f33;
  background-color: #343a40 !important;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 15rem;
  border: solid;
  border-color: blue;
  align-items: center;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Brand = styled(Link)`
  font-size: 1.25rem;
  color: #fff;
  border: solid;
  border-color: yellow;
  flex-grow: 0;
  padding: 0.125rem 0;

  &:focus,
  :hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const MenuToggleButton = styled.button`
  padding: 1.125rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0.25rem;

  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-size: 100% 100%;

  &:hover,
  :focus {
    text-decoration: none;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;

  border: solid;
  border-color: #fff;
  background-color: transparent !important;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    width: auto;
  }

  @media (max-width: 992px) {
    opacity: ${(props) => (props.open ? '1' : '0')};
    max-height: ${(props) => (props.open ? '100%' : '0')};
    border: ${(props) => (props.open ? 'solid' : 'none')};
    border-color: #fff;
    overflow: hidden;
    padding-top: ${(props) => (props.open ? '0.5rem' : '0')};
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    justify-content: space-between;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
`;
