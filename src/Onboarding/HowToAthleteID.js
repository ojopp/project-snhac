import React from 'react';

import styled from 'styled-components/native';

import OnbordingBackground from '../components/OnbordingBg';
import HowtoAthleteIDSource from '../assets/HowToAthleteID.png';

const Container = styled.View`
  flex: 1;
`;

const HowTo = styled.Image`
  width: 90%;
  height: 100%;
  padding-bottom: 100
`;

const Space = styled.View`
  flex: 2;
`;

const InnerContainer = styled.View`
  flex: 2;
  align-items: center;
  padding-bottom: 30%;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default class HowToAthleteID extends React.Component {
  static navigationOptions = {
  }

  render() {
    return (
      <Container>
        <OnbordingBackground />
        <InnerContainer>
          <HowTo source={HowtoAthleteIDSource} resizeMode="contain" />
          <Space />
        </InnerContainer>
      </Container>
    );
  }
}
