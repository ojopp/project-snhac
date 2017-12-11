import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

import OnbordingBackground from '../components/OnbordingBg';
import HowtoAthleteIDSource from '../assets/HowToAthleteID.png';

const HowTo = styled.Image`
  width: 90%;
  height: 60%;
`;

const Space = styled.View`
  flex: 2;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  gradientBg: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txt: {
    color: '#232A30',
    backgroundColor: '#00000000',
  },
});

export default class HowToAthleteID extends React.Component {
  static navigationOptions = {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <OnbordingBackground />
        <View style={styles.container}>
          <HowTo source={HowtoAthleteIDSource} resizeMode="contain" />
          <Space />
        </View>
      </View>
    );
  }
}
