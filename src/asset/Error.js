import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import color from './../global/Color.js';



const Error = ({ message }) =>
  <ErrorContainer>
    <b>Whoops!</b> {message}
  </ErrorContainer>;

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: 'An unidentified error occurred. Life is a mystery.'
}

const ErrorContainer = styled.div`
  color: ${color.alert.error.text};
  background-color: ${color.alert.error.background};
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid ${color.alert.error.border};
  border-radius: 4px;
`;

export default Error;
