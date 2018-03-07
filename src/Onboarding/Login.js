import React from 'react';
import styled from 'styled-components/native';

import Input from '../components/Input';
import OnbordingBackground from '../components/OnbordingBg';
import Logo from '../components/Logo';
import Button from '../components/Button';

const MainContainer = styled.View`
  align-items: center;
`;
const ScrollContainer = styled.View`
  flex: 1;
  position: absolute;
`;

const Spacer = styled.View`
  padding-top: 20px;
`;

const ErrText = styled.Text`
  background-color: transparent;
  color: #ffffff;
  font-size: 14;
  align-self: center;
  height: 26px;
`;

const ForgotPassword = styled.TouchableOpacity`
  align-items: center;
  padding-top: 20px;
`;

const ForgotPasswordText = styled.Text`
  color: #232a30;
  background-color: #ffffff00;
`;

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      err: '',
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
      <MainContainer>
        <OnbordingBackground />
        <ScrollContainer keyboardShouldPersistTaps="never" scrollEnabled={false}>
          <Spacer />
          <Logo width="200" height="200" />
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
          <ErrText>{this.state.err}</ErrText>
          <Button onPress={this.onPressLogin.bind(this)} text="Log in" />
          <ForgotPassword onPress={() => navigate('ForgotPassword')}>
            <ForgotPasswordText>Forgot password?</ForgotPasswordText>
          </ForgotPassword>
        </ScrollContainer>
      </MainContainer>
    );
  }
}
