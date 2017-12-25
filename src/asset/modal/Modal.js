import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    if ((this.props.showProps === false)
        || (this.state.show === false)) {
      return null;
    }
      return (
        <FullScreenContainer onClick={this.toggleShow}>
          hello
        </FullScreenContainer>
      );
    }
}

Modal.propTypes = {
  showProps: PropTypes.bool
}

Modal.defaultProps = {
  showProps: false
}


const FullScreenContainer = styled.section`
  position: fixed;
  overflow: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(34,34,34,0.8);
`;

export default Modal;
