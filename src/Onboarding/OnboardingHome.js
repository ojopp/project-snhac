import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
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
    height: 100,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonL: {
    height: 100,
    backgroundColor: '#ffffff40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextS: {
    color: '#ffffff',
    fontSize: 24,
  },
  buttonTextL: {
    color: '#000000',
    fontSize: 24,
  },
});

export default class OnboardingHome extends React.Component {
  static navigationOptions = {
    headermode: 'none',
    headerBackTitle: 'Back',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#000000',
    },
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/Logo-Large.png')} resizeMode="contain" />
        <StatusBar barStyle="light-content" />

        <TouchableOpacity
          style={styles.buttonL}
          onPress={() => navigate('Login')}
        >
          <Text style={styles.buttonTextL} >
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonS}
          onPress={() => navigate('SignUp')}
        >
          <Text style={styles.buttonTextS}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
