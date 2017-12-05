import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import OnbordingBackground from '../components/OnbordingBg';
import Input from '../components/Input';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: 15,
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
    color: '#232A30ee',
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
    flex: 1,
    width: '100%',
  },
  helpText: {
    alignSelf: 'center',
    color: '#232A30',
    backgroundColor: '#ffffff00',
  },
  help: {
    paddingTop: 20,
  },
});

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: '',
      lName: '',
      email: '',
      p10ID: '',
      password: '',
      confirmPassword: '',
      err: '',
      passwordNotMatch: '',
    };
  }

  onPressSubmit() {
    if (this.state.fName !== '') {
      if (this.state.lName !== '') {
        if (this.state.password === this.state.confirmPassword) {
          this.props.screenProps.signUp(this.state.email, this.state.password, this.state.fName, this.state.lName, this.state.p10ID);
        } else {
          this.setState({ passwordNotMatch: '* Passwords do not match *' });
        }
      } else {
        this.setState({ err: 'Please enter your Last name' });
      }
    } else {
      this.setState({ err: 'Please enter your First name' });
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <OnbordingBackground />
        <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="never" scrollEnabled={false}>
          <Input
            placeholder="First Name"
            onChangeText={value => this.setState({ fName: value })}
            value={this.state.fName}
            autoCapitalize="sentences"
          />
          <Input
            placeholder="Last Name"
            onChangeText={value => this.setState({ lName: value })}
            value={this.state.lName}
            autoCapitalize="sentences"
          />
          <Input
            placeholder="Athlete ID"
            onChangeText={value => this.setState({ p10ID: value })}
            value={this.state.p10ID}
          />
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
          <Input
            placeholder="Confirm password"
            onChangeText={value => this.setState({ confirmPassword: value })}
            value={this.state.confirmPassword}
            secureTextEntry
          />
          <Text style={styles.errText}>
            {this.state.err}
          </Text>
          <Text style={styles.errText}>
            {this.state.passwordNotMatch}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => this.onPressSubmit()}>
            <Text style={styles.buttonText}>
                Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('HowToAthleteID')}>
            <View style={styles.help}>
              <Text style={styles.helpText}>
                How to find your Athlete ID
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
