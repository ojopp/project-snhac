import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


import SignUp from './Onboarding/SignUp';
import Login from './Onboarding/Login';
import OnboardingHome from './Onboarding/OnboardingHome';

import Home from './Screens/Home';
import Events from './Screens/Events';
import Training from './Screens/Training';
import Profile from './Screens/Profile';

const homeIcon = (<Icon name="home" size={34} color="#ff8c00" />);
const eventsIcon = (<Icon name="event" size={34} color="#ffffff" />);
const trainingIcon = (<Icon name="fitness-center" size={34} color="#ffffff" />);
const profileIcon = (<Icon name="account-circle" size={34} color="#ffffff" />);

export const OnboardingRouter = StackNavigator({
  OnboardingHome: {
    screen: OnboardingHome,
    navigationOptions: {
      title: 'Welcome',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
}, {
  navigationOptions: {
    headerBackTitle: 'Back',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#000000',
    },
  },
});

export const MainRouter = TabNavigator({
  OnboardingHome: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: homeIcon,
    },
  },
  Events: {
    screen: Events,
    navigationOptions: {
      title: 'Events',
      tabBarIcon: eventsIcon,
    },
  },
  Training: {
    screen: Training,
    navigationOptions: {
      title: 'Training',
      tabBarIcon: trainingIcon,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: profileIcon,
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#ff8c00',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#000000',
    },
  },
});
