import React from 'react';

import styled from 'styled-components';

import { media } from './../global/styleUtils.js';

import strings from './../global/Strings.js';
import style from './../global/Style.js';
import color from './../global/Color.js';

console.log(color.sidebarBackgound)
const icons = [
                'home',
                'info_outline',
                'hearing',
                'book',
                'forum',
                'email'
              ];

const Sidebar = ({ children }) => {
  const s = strings.en;
  return (
      <SidebarContainer>
          { icons.map(e => <Icon key={e} className='material-icons'>{ e }</Icon>) }
      </SidebarContainer>
  );
}

const SidebarContainer = styled.nav`
  position: fixed;
  z-index: 98;
  top: 100px;
  width: 80px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background-color: ${color.sidebarBackground};
  ${media.tabletSmall`
      flex-flow: row wrap;
      width: 100%;
      height: 50px;
      top: 60px;
    `}
    ${media.phone`
        top: 40px;
        height: 26px;
        background-color: ${color.headerBackground};
    `}
`;

const Icon = styled.i`
  color: #fff;
  font-size: 40px;
  ${media.tabletSmall`
      font-size: 28px;
  `}
  ${media.phone`
      font-size: 14px;
  `}
`;

export default Sidebar;
