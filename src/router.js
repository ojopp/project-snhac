import { StackNavigator, TabNavigator } from 'react-navigation';

import SignUp from './Onboarding/SignUp';
import Login from './Onboarding/Login';
import OnboardingHome from './Onboarding/OnboardingHome';
import ForgotPassword from './Onboarding/ForgotPassword';
import HowToAthleteID from './Onboarding/HowToAthleteID';

import Events from './Screens/Events/EventsRouter';
import Training from './Screens/Training/TrainingRouter';
import Profile from './Screens/Profile/ProfileRouter';

export const OnboardingRouter = StackNavigator(
  {
    OnboardingHome: {
      screen: OnboardingHome,
      navigationOptions: {
        title: 'Welcome',
        headerMode: 'none',
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
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: 'Forgot Passowrd',
      },
    },
    HowToAthleteID: {
      screen: HowToAthleteID,
      navigationOptions: {
        title: 'Athlete ID help',
      },
    },
  },
  {
    navigationOptions: {
      headerBackTitle: 'Back',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#000000',
        height: 30,
      },
    },
  },
);

export const MainRouter = TabNavigator(
  {
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
  },
  {
    tabBarOptions: {
      activeTintColor: '#ff8c00',
      inactiveTintColor: '#232A3090',
      style: {
        backgroundColor: '#ffffff',
      },
    },
  },
);
