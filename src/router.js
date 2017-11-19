import { StackNavigator, TabNavigator } from 'react-navigation';

import SignUp from './Onboarding/SignUp';
import Login from './Onboarding/Login';
import OnboardingHome from './Onboarding/OnboardingHome';

import Home from './Screens/Home';
import Events from './Screens/Events';
import Training from './Screens/Training';
import Profile from './Screens/Profile';

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
    },
  },
  Events: {
    screen: Events,
    navigationOptions: {
      title: 'Events',
    },
  },
  Training: {
    screen: Training,
    navigationOptions: {
      title: 'Training',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
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
