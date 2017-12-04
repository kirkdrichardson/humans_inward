import React, { Component } from 'react';

import styled from 'styled-components';

import { media } from './global/styleUtils.js'

import Header from './comp/Header.js';
import Sidebar from './comp/Sidebar.js';

import strings from './global/Strings.js';
import style from './global/Style.js';


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
  height: 100%;
  width: 100%;
  background-color: #fafafa;
  color: #fff;
  position: fixed;
  font-family: ${style.font.fontStack}
`;

const FluidContainer = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  top: 100px;
  left: 80px;
  ${media.tabletSmall`
      top: 110px;
      left: 0;
      height: 100%;
  `}
  ${media.phone`
      top: 66px;
  `}
`;
