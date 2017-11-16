// @flow

import React from 'react';
import styled from 'styled-components/native';

import { OnboardingRouter, MainRouter } from './router';

const MainContainer = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <MainContainer>
        {
          this.state.loggedIn ?
            <MainRouter /> :
            <OnboardingRouter />
        }
      </MainContainer>
    );
  }
}
