import React, { Component } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FlexColumn = ({
      children,
      margin,
      justifyContent,
      alignItems,
      ...other }
  ) => {
  return (
    <Container {...other} margin={margin} justifyContent={justifyContent} alignItems={alignItems}>
      { children }
    </Container>
  );
}

FlexColumn.PropTypes = {
  margin: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flex: PropTypes.string
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: ${props => props.flex ? props.flex : null};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  margin: ${props => props.margin ? props.margin : '0px'};
`;
