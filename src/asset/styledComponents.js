import React, { Component } from 'react';

import styled from 'styled-components';

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

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  margin: ${props => props.margin ? props.margin : 0};
`;
