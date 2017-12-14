// @flow

import React from 'react';
import styled from 'styled-components/native';
import {
  StatusBar,
  AsyncStorage,
} from 'react-native';
import firebaseApp from './firebase/firebaseConfig';
import { OnboardingRouter, MainRouter } from './router';

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

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in.
        await AsyncStorage.setItem('@userID:key', user.uid);
        // Error saving data
        this.setState({ loggedIn: true });
      } else {
        // No user is signed in.
      }
      this.setState({ render: true });
    });
  }

  signUp = async (email, password, fName, lName, P10ID) => {
    const user = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);

    if (user) {
      this.setState({ loggedIn: true });
      const User = firebaseApp.auth().currentUser;
      const userRef = firebaseApp.database().ref(`athletes/'${User.uid}`);
      userRef.update({
        'first-name': fName,
        'last-name': lName,
        'power-of-10-ID': P10ID,
      });
      try {
        AsyncStorage.setItem('@userID:key', User.uid);
      } catch (error) {
        // Error saving data
        alert('error saving username');
        resolve(false);
      }
      resolve(true);
    }
  }

  login = async (email, password) => {
    const user = await firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
      });
    console.warn(user);
    if (user) {
      this.setState({ loggedIn: true });
      const User = firebaseApp.auth().currentUser;
      const userRef = firebaseApp.database().ref(`project-snhac/Users/${User.uid}`);
      userRef.update({
        Users: User.uid,
      });
      try {
        AsyncStorage.setItem('@userID:key', User.uid);
      } catch (error) {
        // Error saving data
        alert('error saving username');
        resolve(false);
      }
      resolve(true);
    }
  }

  signOut = async () => {
    firebaseApp.auth().signOut()
      .then(() => {
        this.setState({ loggedIn: false });
      });
  }

  forgotPassword = async (email) => {
    firebaseApp.auth().sendPasswordResetEmail(email).then(() => {
      // Email sent.
    }).catch((error) => {
      // An error happened.
    });
  }

  render() {
    if (this.state.render) {
      return (
        <MainContainer>
          <StatusBar barStyle="light-content" setBackgroundColor="#000000" />
          {
            this.state.loggedIn ?
              <MainRouter screenProps={{ signOut: this.signOut }} /> :
              <OnboardingRouter screenProps={{
                login: this.login,
                signUp: this.signUp,
                forgotPassword: this.forgotPassword,
              }}
              />
          }
        </MainContainer>
      );
    }
    return null; // replace with splashscreen
  }
}
