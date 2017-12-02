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


const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollCont: {
    flex: 1,
    backgroundColor: '#ff8c00',
  },
  logo: {
    width: 175,
    height: 175,
  },
  inputContainer: {
    marginTop: 15,
    alignItems: 'center',
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
    alignSelf: 'center',
    flex: 1,
    width: '100%',
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

const BackgroundSource = require('../assets/OnbordingBackground.png');

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
      <ScrollView style={styles.scrollCont} keyboardShouldPersistTaps="never" scrollEnabled={false}>
        <Image style={styles.gradientBg} source={BackgroundSource} resizeMode="stretch" />
        <View style={styles.innerContainer}>
          <View style={styles.container}>
            <Image style={styles.logo} source={SNHACLogoSource} resizeMode="stretch" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={value => this.setState({ email: value })}
              placeholder="Email"
              placeholderTextColor="#232A3090"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              onChangeText={value => this.setState({ password: value })}
              placeholder="Password"
              placeholderTextColor="#232A3090"
              secureTextEntry
              underlineColorAndroid="transparent"
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
                Forgot your password?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

