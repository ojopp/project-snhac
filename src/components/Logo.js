import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const LogoImage = styled.Image`
  width: ${props => props.width};
  height: ${props => props.height};
  flex: ${props => props.flex};
  align-self: ${props => props.align};
  justify-content: ${props => props.justify};
`;

const LogoSource = require('../assets/Logo-Large.png');

export default class Logo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    flex: PropTypes.number.isRequired,
    align: PropTypes.string.isRequired,
    justify: PropTypes.string.isRequired,
  };

  static defaultProps = {
    width: 100,
    height: 100,
  };

  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <LogoImage
        source={LogoSource}
        resizeMode="contain"
        width={this.props.width}
        height={this.props.height}
        flex={this.props.flex}
        align={this.props.align}
        justify={this.props.justify}
      />
    );
  }
}
