import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar, ScrollView,
} from 'react-native';
import firebaseApp from '../firebase/firebaseConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ff8c00',
    paddingTop: 20,
  },
  input: {
    height: 50,
    marginTop: 10,
    marginHorizontal: 20,
    paddingLeft: 20,
    alignSelf: 'stretch',
    backgroundColor: '#ffac49',
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    borderRadius: 6,
    color: '#ffffff',
    fontSize: 18,
  },
  button: {
    height: 50,
    marginTop: 5,
    marginHorizontal: 60,
    padding: 4,
    alignSelf: 'stretch',
    backgroundColor: '#000000',
    borderRadius: 8,
  },
  buttonText: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  errText: {
    paddingTop: 5,
    color: '#ff0000',
    height: 20,
    backgroundColor: '#00000000',
  },
});


export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      paasword: '',
      confirmPassword: '',
      passwordNotMatch: '',
      invalidEmail: '',
    };
  }

  onPressSubmit() {
    if (this.state.password === this.state.confirmPassword) {
      this.props.screenProps.signUp(this.state.email, this.state.paasword);
    } else {
      this.setState({ passwordNotMatch: '* Passwords do not match *' });
    }
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#ff8c00' }} keyboardShouldPersistTaps="never" scrollEnabled={false}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({ firstName: value })}
            placeholder="First Name"
            placeholderTextColor="#ffffffa0"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({ lastName: value })}
            placeholder="Last Name"
            placeholderTextColor="#ffffffa0"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({ email: value })}
            placeholder="Email"
            placeholderTextColor="#ffffffa0"
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({ password: value })}
            placeholder="Password"
            placeholderTextColor="#ffffffa0"
            secureTextEntry
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            onChangeText={value => this.setState({ confirmPassword: value })}
            placeholder="Confirm Password"
            placeholderTextColor="#ffffffa0"
            secureTextEntry
            returnKeyType="next"
            underlineColorAndroid="transparent"
          />
          <Text style={styles.errText}>
            {this.state.invalidEmail}
          </Text>
          <Text style={styles.errText}>
            {this.state.passwordNotMatch}
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.onPressSubmit.bind(this)}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}
