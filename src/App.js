import React, { Component } from 'react';

import styled from 'styled-components';

import { media } from './global/styleUtils.js'

import Header from './comp/Header.js';
import Sidebar from './comp/Sidebar.js';

import strings from './global/Strings.js';
import style from './global/Style.js';
import color from './global/Color.js';


export default class App extends Component {
  render() {
    const s = strings.en;
    return (
      <MainContainer>
        <Header />
        <Sidebar />
        <FluidContainer>
          hello
        </FluidContainer>

      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fafafa;
  color: #fff;
  position: fixed;
  font-family: ${style.font.fontStack};
`;

const FluidContainer = styled.main`
  position: absolute;
  top: 100px;
  left: 80px;
  right: 0;
  bottom: 0;
  background-color: ${color.mainContentBackground};
  ${media.tabletSmall`
      top: 106px;
      left: 0;
      height: 100%;
  `}
  ${media.phone`
      top: 60px;
  `}
`;
