import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';


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
    height: 60,
    backgroundColor: '#232A3000',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ff8c0060',
  },
  buttonL: {
    height: 60,
    backgroundColor: '#232A3000',
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

const SNHACLogoSource = require('../assets/Logo-Large.png');

const BackgroundSource = require('../assets/OnbordingBackground.png');

export default class OnboardingHome extends React.Component {
  static navigationOptions = {
    headermode: 'none',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.gradientBg} source={BackgroundSource} resizeMode="stretch" />
        <View style={styles.innerContainer} >
          <Image style={styles.logo} source={SNHACLogoSource} resizeMode="contain" />
          <TouchableOpacity
            style={styles.buttonL}
            onPress={() => navigate('Login')}
          >
            <Text style={styles.buttonText} >
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonS}
            onPress={() => navigate('SignUp')}
          >
            <Text style={styles.buttonText}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
