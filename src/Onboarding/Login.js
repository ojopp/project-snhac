import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import Input from '../components/Input';
import OnbordingBackground from '../components/OnbordingBg';
import Logo from '../components/Logo';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    height: 36,
    marginTop: 10,
    width: 300,
    paddingLeft: 12,
    backgroundColor: '#232A3000',
    borderRadius: 18,
    borderColor: '#232A30',
    borderWidth: 2,
    color: '#232A30',
    fontSize: 16,
  },
  button: {
    height: 36,
    width: 100,
    padding: 4,
    alignSelf: 'center',
    backgroundColor: '#232A30dd',
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: '#232A30',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
  buttonText: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    paddingTop: 4,
  },
  errText: {
    color: '#ff0000',
    backgroundColor: '#00000000',
  },
  gradientBg: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  helpText: {
    color: '#232A30',
    backgroundColor: '#ffffff00',
  },
  help: {
    paddingTop: 20,
    alignSelf: 'center',
  },
});

const SNHACLogoSource = require('../assets/Logo-Large.png');

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      incorrectPassword: '',
      invalidEmail: '',
    };
  }


  onPressLogin() {
    if (this.state.email != null) {
      if (this.state.password != null) {
        this.props.screenProps.login(this.state.email, this.state.password);
      } else {
        this.state.incorrectPassword = 'please enter your password';
      }
    } else {
      this.setState.invalidEmail = 'Please enter your email address';
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <OnbordingBackground />
        <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="never" scrollEnabled={false}>
          <View style={styles.container}>
            <Image source={SNHACLogoSource} style={styles.logo} resizeMode="stretch" />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              onChangeText={value => this.setState({ email: value })}
              value={this.state.email}
              keyboardType="email-address"
            />
            <Input
              placeholder="Password"
              onChangeText={value => this.setState({ password: value })}
              value={this.state.password}
              secureTextEntry
            />
            <Text style={styles.errText}>
              {this.state.invalidEmail}
            </Text>
            <Text style={styles.errText}>
              {this.state.incorrectPassword}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressLogin.bind(this)}
          >
            <Text style={styles.buttonText}>
                Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
            <View style={styles.help}>
              <Text style={styles.helpText}>
                Forgot password?
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

