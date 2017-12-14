import React from 'react';
import styled from 'styled-components/native';

import OnbordingBackground from '../components/OnbordingBg';
import Input from '../components/Input';
import Button from '../components/Button';

const MainContainer = styled.View`
`;

const InnerContainer = styled.View`
  flex: 1;
  position: absolute;
  align-self: center;
`;

const AthleteID = styled.TouchableOpacity`
`;

const HelpContainer = styled.View`
  padding-top: 20;
`;

const HelpText = styled.Text`
  align-self: center;
  color: #232A30;
  background-color: #ffffff00;
`;

const ErrText = styled.Text`
  background-color: transparent;
  color: #ffffff;
  font-size: 14;
  align-self: center;
  height: 20;
`;

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
    };
  }

  onPressSubmit() {
    if (this.state.fName !== '') {
      if (this.state.lName !== '') {
        this.setState({ err: '' });
        if (this.state.p10ID !== '') {
          if (this.state.email !== '') {
            if (this.state.password !== '') {
              if (this.state.password === this.state.confirmPassword) {
                this.props.screenProps.signUp(this.state.email, this.state.password, this.state.fName, this.state.lName, this.state.p10ID);
              } else {
                this.setState({ err: 'Passwords do not match' });
              }
            } else {
              this.setState({ err: 'Please enter a Password' });
            }
          } else {
            this.setState({ err: 'Please enter your Email' });
          }
        } else {
          this.setState({ err: 'Please enter your Athlete ID' });
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
      <MainContainer>
        <OnbordingBackground />
        <InnerContainer keyboardShouldPersistTaps="never" scrollEnabled={false}>
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
          <ErrText>
            {this.state.err}
          </ErrText>
          <Button onPress={() => this.onPressSubmit()} text="SignUp" />
          <AthleteID onPress={() => navigate('HowToAthleteID')}>
            <HelpContainer>
              <HelpText>
                How to find your Athlete ID
              </HelpText>
            </HelpContainer>
          </AthleteID>
        </InnerContainer>
      </MainContainer>
    );
  }
}
