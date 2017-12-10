import React from 'react';

import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { fadeIn } from './../../global/styleUtils.js';

import color from './../../global/Color.js';

const TileBody = ({ description, imgSrc, imgLabel }) =>
    <Row>
      <Description>{ description }</Description>
      <ImgContainer>
        <ImgLabel>{ imgLabel }</ImgLabel>
        <Img src={imgSrc} />
      </ImgContainer>
    </Row>

  TileBody.propTypes = {
    imgSrc: PropTypes.string,
    description: PropTypes.string
  }

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Description = styled.p`
  margin: 0;
  flex: 2;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const ImgLabel = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background: ${color.rubiks.green};
  border-radius: 4px;
  color: ${color.primaryTextNegative};
  font-size: 16px;
`;

const Img = styled.img`
  height: 160px;
  width: 160px;
`;

export default TileBody;
