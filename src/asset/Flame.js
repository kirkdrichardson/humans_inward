import React from 'react';

import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { fadeIn } from './../global/styleUtils.js';

import color from './../global/Color.js';

/*
    shrinkBy    INT (optional) divide pixel values by given number, default is 1
*/

const Flame = ({ shrinkBy, fadeDuration }) => {
  shrinkBy = shrinkBy ? shrinkBy : 1;
  return (
    <FadeWrapper fadeDuration={fadeDuration}>
      <Container s={shrinkBy}>
        <Red s={shrinkBy} />
        <Orange s={shrinkBy} />
        <Yellow s={shrinkBy} />
        <White s={shrinkBy} />
        <Blue s={shrinkBy} />
        <Black s={shrinkBy} />
      </Container>
    </FadeWrapper>
  );
}


Flame.propTypes = {
  shrinkBy: PropTypes.number,
  fadeDuration: PropTypes.number
}

const flicker = keyframes`
  0%   {transform: rotate(-2deg);}
  20%  {transform: rotate(2deg);}
  40%  {transform: rotate(-2deg);}
  60%  {transform: rotate(2deg) scaleY(1.04);}
  80%  {transform: rotate(-4deg) scaleY(0.92);}
  100% {transform: rotate(2deg);}
`;

const FadeWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  animation: ${fadeIn}  ${props => props.fadeDuration}s;
`;

const Container = styled.div`
  margin: ${props => Math.floor(80 / props.s)}px;
  width: ${props => Math.floor(60 / props.s)}px;
  height: ${props => Math.floor(60 / props.s)}px;
  position: relative;
  transform-origin: center bottom;
  animation-name: ${flicker};
  animation-duration: 3ms;
  animation-delay: 200ms;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const FlameClass = styled.div`
  bottom: 0;
  position: absolute;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  transform: rotate(-45deg) scale(1.5,1.5);
`;


const Yellow = FlameClass.extend`
  left: ${props => Math.floor(15 / props.s)}px;
  width: ${props => Math.floor(30 / props.s)}px;
  height: ${props => Math.floor(30 / props.s)}px;
  background: gold;
  box-shadow: 0px 0px ${props => Math.floor(9 / props.s)}px ${props => Math.floor(4 / props.s)}px gold;
`;

const Orange = FlameClass.extend`
  left: ${props => Math.floor(10 / props.s)}px;;
  width: ${props => Math.floor(40 / props.s)}px;
  height: ${props => Math.floor(40 / props.s)}px;
  background: orange;
  box-shadow: 0px 0px ${props => Math.floor(9 / props.s)}px ${props => Math.floor(4 / props.s)}px orange;
`;

const Red = FlameClass.extend`
  left: ${props => Math.floor(5 / props.s)}px;
  width: ${props => Math.floor(50 / props.s)}px;
  height: ${props => Math.floor(50 / props.s)}px;
  background: OrangeRed;
  box-shadow: 0px 0px ${props => Math.floor(5 / props.s)}px ${props => Math.floor(4 / props.s)}px OrangeRed;
`;

const White = FlameClass.extend`
  left: ${props => Math.floor(15 / props.s)}px;
  bottom: ${props => Math.floor(-4 / props.s)}px;
  width: ${props => Math.floor(30 / props.s)}px;
  height: ${props => Math.floor(30 / props.s)}px;
  background: white;
  box-shadow: 0px 0px ${props => Math.floor(9 / props.s)}px ${props => Math.floor(4 / props.s)}px white;
`;

const Circle = styled.div`
  border-radius: 50%;
  position: absolute;
`;

const Blue = Circle.extend`
  width: ${props => Math.floor(10 / props.s)}px;
  height: ${props => Math.floor(10 / props.s)}px;
  left: ${props => Math.floor(25 / props.s)}px;
  bottom: ${props => Math.floor(-25 / props.s)}px;
  background: SlateBlue;
  box-shadow: 0px 0px ${props => Math.floor(15 / props.s)}px ${props => Math.floor(10 / props.s)}px SlateBlue;
`;

const Black = Circle.extend`
  width: ${props => Math.floor(40 / props.s)}px;
  height: ${props => Math.floor(40 / props.s)}px;
  left: ${props => Math.floor(10 / props.s)}px;
  bottom: ${props => Math.floor(-60 / props.s)}px;
  background: ${color.headerBackground};
  box-shadow: 0px 0px ${props => Math.floor(15 / props.s)}px ${props => Math.floor(10 / props.s)}px ${color.headerBackground};
`;

export default Flame;
