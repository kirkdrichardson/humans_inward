import React from 'react';

import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import TileTitle from './TileTitle.js';
import TileBody from './TileBody.js';

// import { fadeIn } from './../global/styleUtils.js';

import color from './../../global/Color.js';

const Tile = ({ title, description, imgSrc, imgLabel, onClick }) => {
  return (
      <Container onClick={onClick}>
        <TileTitle>{ title }</TileTitle>
        <TileBody
          description={description}
          imgSrc={imgSrc}
          imgLabel={imgLabel} />
      </Container>
  );

}

Tile.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func
}

const Container = styled.div`
border: 1px dashed red;
  display: flex;
  flex: 0 1 440px;
  flex-flow: column nowrap;
  background: ${color.tile.tileBackground};
  padding: 10px;
  margin: 4px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: $${color.boxShadow} 5px 5px 10px;
  cursor: pointer;
`;

export default Tile;
