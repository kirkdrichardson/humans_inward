import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import color from './../../global/Color';
import style from './../../global/Style';

const IconTile = ({
  id, icon, title, iconColor, onClick,
}) => (
  <Container id={id} onClick={onClick}>
    <Icon color={iconColor} className="material-icons">{ icon }</Icon>
    <Title>{ title }</Title>
  </Container>
);

IconTile.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  iconColor: PropTypes.string,
};

IconTile.defaultProps = {
  icon: 'favorite_border',
  title: 'Untitled',
  onClick: () => new Error('did not recieve onClick Fx'),
  iconColor: color.rubiks.green,
};

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 250px;
  height: 250px;
  background: ${color.headerBackground};
  padding: 10px;
  margin: 20px 20px 0 0;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: ${color.boxShadow} 1px 1px 6px;
  cursor: pointer;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const Icon = styled.i`
  color: blue;
  font-size: 110px;
  color: ${props => (props.color ? props.color : color.rubiks.blue)};
  opacity: 0.7;
  ${Container}:hover & {
    font-size: 120px;
    opacity: 1;
  }
`;

const Title = styled.h3`
  font: 24px ${style.font.accent};
  color: ${color.primaryTextNegative};
  ${Container}:hover & {
    font-size: 28px;
  }
`;

export default IconTile;
