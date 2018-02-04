// @flow

import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, AsyncStorage } from 'react-native';

import { OnboardingRouter, MainRouter } from './router';
import firebaseApp from './firebase/firebaseConfig';
import { signUp, signOut, login, forgotPassword } from './firebase/auth/api';

const MainContainer = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      render: false,
    };
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in.
        await AsyncStorage.setItem('uid', user.uid);
        this.setState({ loggedIn: true });
      } else {
        // No user is signed in.
      }
      this.setState({ render: true });
    });
  }

  signUp = async (email, password, fName, lName, P10ID) => {
    await signUp(email, password, fName, lName, P10ID, () => {
      this.setState({ loggedIn: true });
    });
  };

  login = async (email, password) => {
    await login(email, password, () => {
      this.setState({ loggedIn: true });
    });
  };

  signOut = async () => {
    await signOut(() => {
      this.setState({ loggedIn: false });
    });
  };

  render() {
    if (this.state.render) {
      return (
        <MainContainer>
          <StatusBar barStyle="light-content" setBackgroundColor="#000000" />
          {this.state.loggedIn ? (
            <MainRouter screenProps={{ signOut: this.signOut }} />
          ) : (
            <OnboardingRouter
              screenProps={{
                login: this.login,
                signUp: this.signUp,
                forgotPassword,
              }}
            />
          )}
        </MainContainer>
      );
    }
    return null; // replace with splashscreen
  }
}
