import React from 'react';
import styled from 'styled-components/native';

import Logo from '../components/Logo';
import OnbordingBackground from '../components/OnbordingBg';

const MainContainer = styled.View`
  flex: 1;
  background-color: #ff8c00;
`;

const InnerContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.View`
  flex: 1;
  justify-content: center; 
`;

const Button = styled.TouchableOpacity`
    height: 75px;
    background-color: #00000000;
    align-items: center;
    justify-content: center;
    border-top-width: 1px;
    border-top-color: #ff8c0060;
`;

const StickBottom = styled.View`
  justify-content: flex-end;
  flex-direction: column;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  fontSize: 24px;
`;

export default class OnboardingHome extends React.Component {
  static navigationOptions = {
    headermode: 'none',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MainContainer>
        <OnbordingBackground />
        <InnerContainer >
          <LogoContainer >
            <Logo width="80%" height="80%" />
          </LogoContainer>
          <StickBottom>
            <Button onPress={() => navigate('Login')}>
              <ButtonText >
                Log in
              </ButtonText>
            </Button>
            <Button onPress={() => navigate('SignUp')}>
              <ButtonText >
                Sign up
              </ButtonText>
            </Button>
          </StickBottom>
        </InnerContainer>
      </MainContainer>
    );
  }
}
