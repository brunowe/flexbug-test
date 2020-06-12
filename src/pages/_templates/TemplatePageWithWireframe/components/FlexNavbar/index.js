import React from 'react';
import NavItem from './NavItem';
import Find from './Find';
import {
  Container,
  ActionContainer,
  Brand,
  MenuToggleButton,
  MenuContainer,
} from './styles';

export default class FlexNavbar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Container>
        <ActionContainer>
          <Brand to="/">peerLab</Brand>
          <MenuToggleButton onClick={this.toggleOpen} />
        </ActionContainer>
        <MenuContainer open={this.state.open}>
          <Find />
          <ul>
            <NavItem item="Contato" route="/" />
            <NavItem item="Pedidos" troute="/" />
            <NavItem item="Login" route="/" />
          </ul>
        </MenuContainer>
      </Container>
    );
  }
}
