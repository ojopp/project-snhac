import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const LogoImage = styled.Image`
  width: ${props => props.width};
  height: ${props => props.height};
  align-self: ${props => props.align};
  justify-content: ${props => props.justify};
`;

const LogoSource = require('../assets/Logo-Large.png');

export default class Logo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
  };

  static defaultProps = {
    width: 100,
    height: 100,
    align: 'center',
    justify: 'center',
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
        align={this.props.align}
        justify={this.props.justify}
      />
    );
  }
}
