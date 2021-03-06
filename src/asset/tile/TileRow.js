import React from 'react';

import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { fadeIn } from './../../global/styleUtils.js';

import color from './../../global/Color.js';
import style from './../../global/Style.js';

const TileRow = ({ children, rowTitle }) =>
  <Column>
    <Title>{ rowTitle }</Title>
    <Row>{ children }</Row>
  </Column>

  TileRow.propTypes = {
    rowTitle: PropTypes.string
  }

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;

`;

const Title = styled.h2`
  color: ${color.primaryTextNegative};
  font-family: ${style.font.accent};
  font-weight: 300;
`;

const Row = styled.div`
border: 1px dashed coral;
  display: flex;
  flex-flow: row wrap;
  border-radius: 5px;
`;

export default TileRow;
