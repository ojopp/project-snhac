import React from 'react';
import styled from 'styled-components/native';

import OnbordingBackground from '../components/OnbordingBg';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from '../components/Logo';

const InnerContainer = styled.View`
  flex: 1;
`;

const Container = styled.View`
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;

const MainContainer = styled.View`
`;

const Spacer = styled.View`
  height: 70px;
`;

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <MainContainer>
        <OnbordingBackground />
        <Container>
          <Logo width="200" height="200" />
          <InnerContainer>
            <Input
              placeholder="Email"
              onChangeText={value => this.setState({ email: value })}
              value={this.state.email}
              keyboardType="email-address"
            />
            <Spacer />
            <Button onPress={() => this.props.screenProps.forgotPassword(this.state.email)} text="Submit" />
          </InnerContainer>
        </Container>
      </MainContainer>
    );
  }
}
