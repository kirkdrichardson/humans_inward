import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import color from './../global/Color.js';
import style from './../global/Style.js';

const NavLink = ({ text, func }) =>
  <Nav onClick={func}>
    <ChevronLeft className='material-icons'>chevron_left</ChevronLeft>
    <Text>{ text }</Text>
  </Nav>

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: ${color.iconColor};
  font-family: ${style.font.accent};
  margin: 20px 0;
  cursor: pointer;
`;

const ChevronLeft = styled.i`
  font-size: 28px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 22px;
`;

export default NavLink;
