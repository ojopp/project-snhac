import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

import Logo from '../components/Logo';
import OnbordingBackground from '../components/OnbordingBg';

const Button = styled.TouchableOpacity`
    height: 75px;
    background-color: #00000000;
    align-items: center;
    justify-content: center;
    border-top-width: 1px;
    border-top-color: #ff8c0060;
`;

const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #ff8c00;
`;

const styles = StyleSheet.create({
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  innerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default class OnboardingHome extends React.Component {
  static navigationOptions = {
    headermode: 'none',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MainContainer>
        <OnbordingBackground />
        <View style={styles.innerContainer} >
          <Logo width="80%" height="80%" flex={1} />
          <Button onPress={() => navigate('Login')}>
            <Text style={styles.buttonText} >
              Log in
            </Text>
          </Button>
          <Button onPress={() => navigate('SignUp')}>
            <Text style={styles.buttonText}>
              Sign up
            </Text>
          </Button>
        </View>
      </MainContainer>
    );
  }
}
