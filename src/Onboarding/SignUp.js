import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import OnbordingBackground from '../components/OnbordingBg';
import Input from '../components/Input';
import Button from '../components/Button';

const MainContainer = styled.View``;

const InnerContainer = styled.View`
  flex: 1;
  position: absolute;
  align-self: center;
  padding-top: 10px;
`;

const AthleteID = styled.TouchableOpacity``;

const HelpContainer = styled.View`
  padding-top: 20;
`;

const HelpText = styled.Text`
  align-self: center;
  color: #232a30;
  background-color: #ffffff00;
`;

const ErrText = styled.Text`
  background-color: transparent;
  color: #ffffff;
  font-size: 14;
  align-self: center;
  height: 20;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const GenderButton = styled.TouchableOpacity`
  height: 36px;
  width: 100px;
  margin-horizontal: 12.5px;
  border-radius: 20px;
  background-color: #232a30dd;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
`;

const AnimatedGenderButton = Animated.createAnimatedComponent(GenderButton);

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: '',
      lName: '',
      gender: '',
      email: '',
      p10ID: '',
      password: '',
      confirmPassword: '',
      err: '',
      maleOpacity: new Animated.Value(0.6),
      femaleOpacity: new Animated.Value(0.6),
    };
  }

  onPressSubmit() {
    if (this.state.fName !== '') {
      if (this.state.lName !== '') {
        this.setState({ err: '' });
        if (this.state.gender !== '') {
          if (this.state.p10ID !== '') {
            if (this.state.email !== '') {
              if (this.state.password !== '') {
                if (this.state.password === this.state.confirmPassword) {
                  this.props.screenProps.signUp(
                    this.state.email,
                    this.state.password,
                    this.state.fName,
                    this.state.lName,
                    this.state.p10ID,
                    this.state.gender,
                  );
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
          this.setState({ err: 'Please select your gender' });
        }
      } else {
        this.setState({ err: 'Please enter your Last name' });
      }
    } else {
      this.setState({ err: 'Please enter your First name' });
    }
  }

  male = () => {
    Animated.parallel([
      Animated.timing(this.state.maleOpacity, {
        toValue: 1,
        duration: 1,
      }),
      Animated.timing(this.state.femaleOpacity, {
        toValue: 0.6,
        duration: 1,
      }),
    ]).start();
  };

  female = () => {
    Animated.parallel([
      Animated.timing(this.state.maleOpacity, {
        toValue: 0.6,
        duration: 1,
      }),
      Animated.timing(this.state.femaleOpacity, {
        toValue: 1,
        duration: 1,
      }),
    ]).start();
  };

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
          <ButtonContainer>
            <AnimatedGenderButton
              style={{ opacity: this.state.maleOpacity }}
              onPress={() => {
                this.male();
                this.setState({ gender: 'male' });
              }}
            >
              <ButtonText> Male </ButtonText>
            </AnimatedGenderButton>
            <AnimatedGenderButton
              style={{ opacity: this.state.femaleOpacity }}
              onPress={() => {
                this.female();
                this.setState({ gender: 'female' });
              }}
            >
              <ButtonText> Female </ButtonText>
            </AnimatedGenderButton>
          </ButtonContainer>
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
          <ErrText>{this.state.err}</ErrText>
          <Button onPress={() => this.onPressSubmit()} text="SignUp" />
          <AthleteID onPress={() => navigate('HowToAthleteID')}>
            <HelpContainer>
              <HelpText>How to find your Athlete ID</HelpText>
            </HelpContainer>
          </AthleteID>
        </InnerContainer>
      </MainContainer>
    );
  }
}
