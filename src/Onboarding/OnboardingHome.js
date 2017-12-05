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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ff8c00',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  buttonS: {
    height: 75,
    backgroundColor: '#232A3000',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ff8c0060',
  },
  buttonL: {
    height: 75,
    backgroundColor: '#00000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ff8c0060',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  gradientBg: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
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
      <View style={styles.container}>
        <OnbordingBackground />
        <View style={styles.innerContainer} >
          <Logo width="80%" height="80%" flex={1} align="center" justify="center" />
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
      </View>
    );
  }
}
