import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import Find from './Find';
import { MainContainer, NavbarContainer } from './styles';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <MainContainer>
          <NavbarContainer>
            <Link style={{ marginRight: 150 }} className="navbar-brand" to="/">
              peerLab
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <Find />
              <ul className="navbar-nav ml-auto">
                <NavItem item="Contato" route="/" />
                <NavItem item="Pedidos" route="/" />
                <NavItem item="Login" route="/" />
              </ul>
            </div>
          </NavbarContainer>
        </MainContainer>
      </nav>
    </>
  );
}
