import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import OnbordingBackground from '../components/OnbordingBg';
import Input from '../components/Input';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  gradientBg: {
    width: '100%',
    height: '100%',
  },
  txt: {
    color: '#232A30',
    backgroundColor: 'transparent',
  },
  spacing: {
    height: 20,
  },
});

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View>
        <OnbordingBackground />
        <View style={styles.container}>
          <Input
            placeholder="Email"
            onChangeText={value => this.setState({ email: value })}
            value={this.state.email}
            keyboardType="email-address"
          />
          <View style={styles.spacing} />
          <Button onPress={() => this.props.screenProps.forgotPassword(this.state.email)} text="Submit" />
        </View>
      </View>
    );
  }
}
