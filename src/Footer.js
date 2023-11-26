// Footer.js

import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>This is the sticky footer of the website.</p>
    </StyledFooter>
  );
};

export default Footer;
