import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StickyNavContainer = styled.div`
  background-color: #333;
  padding: 1rem;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;

const NavMenu = () => {
  return (
    <StickyNavContainer>
      <NavItem to="/" end>
        Home
      </NavItem>{" "}
      |{" "}
      <NavItem to="/about">
        About
      </NavItem>{" "}
      |{" "}
      <NavItem to="/contact">
        Contact
      </NavItem>{" "}
      |{" "}
      <NavItem to="/products">
        Products
      </NavItem>
    </StickyNavContainer>
  );
};

export default NavMenu;
