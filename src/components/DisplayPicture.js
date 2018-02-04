import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const DisplayImage = styled.Image`
  width: ${props => props.width};
  height: ${props => props.height};
  align-self: ${props => props.align};
  justify-content: ${props => props.justify};
  border-radius: 54px;
  border-color: #232a3055;
  border-width: 2px;
`;

const PictureSource = require('../assets/OscarJopp.jpg');

export default class Logo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
  };

  static defaultProps = {
    width: '108',
    height: '108',
    align: 'center',
    justify: 'center',
  };

  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {
      width, height, align, justify,
    } = this.props;

    return (
      <DisplayImage
        source={PictureSource}
        resizeMode="contain"
        width={width}
        height={height}
        align={align}
        justify={justify}
      />
    );
  }
}
