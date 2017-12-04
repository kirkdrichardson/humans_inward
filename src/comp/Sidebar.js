import React, { Component } from 'react';
import withSizes from 'react-sizes';

import styled from 'styled-components';

import { media, sizes } from './../global/styleUtils.js';
import { FlexColumn } from './../asset/styledComponents.js';

import strings from './../global/Strings.js';
import style from './../global/Style.js';
import color from './../global/Color.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIconDescription: false
    }
    this.icons = [
      { title: 'home', color: 'red'},
      { title: 'info_outline', color: 'green'},
      { title: 'hearing', color: 'blue'},
      { title: 'book', color: 'purple'},
      { title: 'forum', color: 'yellow'},
      { title: 'email', color: 'coral'}
    ];
  }
  toggleIconDescription = () => {
    this.setState({ showIconDescription: !this.state.showIconDescription });
  }
  render() {
    const s =     strings.en,
                  { children, isTablet } = this.props,
                  { showIconDescription } = this.state;
    return (
        <SidebarContainer
          onMouseOver={ this.toggleIconDescription }
          onMouseOut={ this.toggleIconDescription }>
            { this.icons.map(e =>
                <FlexColumn
                  key={e.title}
                  margin={isTablet ? null : '20px 0 0 0'}>
                    <Icon
                      color={ showIconDescription ? e.color : color.iconColor }
                      className='material-icons'>
                        { e.title }
                    </Icon>
                    {!isTablet &&
                        <IconDescription color={showIconDescription ? color.primaryTextNegative : 'transparent' }>
                          { e.title }
                        </IconDescription>
                    }
                </FlexColumn>

              )}
        </SidebarContainer>
    );
  }
}

const SidebarContainer = styled.nav`
  position: fixed;
  z-index: 98;
  top: 100px;
  bottom: 0;
  width: 80px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  background-color: ${color.sidebarBackground};
  ${media.tabletSmall`
      flex-flow: row wrap;
      justify-content: space-around;
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
  font-size: 40px;
  color: ${props => props.color };
  ${media.tabletSmall`
      font-size: 28px;
  `}
  ${media.phone`
      font-size: 14px;
  `}
`;

const IconDescription = styled.p`
  margin: 0;
  font-size: 14px;
  padding: 8px;
  color: ${props => props.color};
  ${media.tabletSmall`
      font-size: 0px;
  `}
`;

const mapSizesToProps = ({ width }) => ({
  isTablet: width < sizes.tablet,
  isphone: width < sizes.phone
});

export default withSizes(mapSizesToProps)(Sidebar);
