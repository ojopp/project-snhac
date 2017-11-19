// @flow

import React from 'react';
import styled from 'styled-components/native';

import firebaseApp from './firebase/firebaseConfig';
import { OnboardingRouter, MainRouter } from './router';

const MainContainer = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: true,
    };

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signUp = (email, password) => {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        // let errorCode = error.code;
        let errorMessage = error.message;
        if (errorMessage === 'The email address is badly formatted.') {
          errorMessage = 'Invalid email address';
        }
      })
      .then(() => {
        this.setState({ loggedIn: true });
      });
  }

  login = (email, password) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        let errorMessage = error.message;
        if (errorMessage === 'The email address is badly formatted.') {
          errorMessage = 'Invalid email address';
        }
      })
      .then(() => {
        this.setState({ loggedIn: true });
      });
  }

  signOut = () => {
    firebaseApp.auth().signOut()
      .then(() => {
        this.setState({ loggedIn: false });
      });
  }

  render() {
    return (
      <MainContainer>
        {
          this.state.loggedIn ?
            <MainRouter /> :
            <OnboardingRouter screenProps={{ login: this.login, signUp: this.signUp }} />
        }
      </MainContainer>
    );
  }
}
