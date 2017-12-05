import React, { Component } from 'react';
import styled from 'styled-components/native';

const BgImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BackgroundSource = require('../assets/OnbordingBackground.png');

export default class OnbordingBackground extends Component {
  constructor() {
    super();

    this.state = {

    };
  }
  render() {
    return (
      <BgImage source={BackgroundSource} resizeMode="stretch" />
    );
  }
}
