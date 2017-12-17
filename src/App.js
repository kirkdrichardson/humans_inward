import { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'mobx-react';

import { media } from './global/styleUtils.js'

import Header from './comp/Header.js';
import Sidebar from './comp/Sidebar.js';
import Home from './comp/home/Home.js';

import strings from './global/Strings.js';
import style from './global/Style.js';
import color from './global/Color.js';

import NavigationStore from './store/NavigationStore.js';


export default class App extends Component {
  render() {
    const s = strings.en;
    return (
      <Provider NavigationStore={NavigationStore}>
        <MainContainer>
          <Header />
          <Sidebar />
          <FluidContainer>
          { /* TODO - move rows to home component */}
            <Home />

          </FluidContainer>

        </MainContainer>
      </Provider>
    );
  }
}

// TODO - expand container to fill

const MainContainer = styled.div`
position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${color.primaryBackground};
  color: #fff;
  font-family: ${style.font.main};
  color: ${color.primaryText};
  overflow-y: scroll;
`;

const FluidContainer = styled.main`
border: 1px dashed green;

  overflow: auto;
  color: ${color.primaryText};
  position: fixed;
  top: 100px;
  left: 80px;
  right: 0;
  bottom: 0;
  padding: ${style.fluidContainerPadding};
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
