import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from './Profile';
import SettingsScreen from './Settings';

const ProfileStack = StackNavigator({
  Home: {
    screen: ProfileScreen,
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
    },
  },
}, {
  navigationOptions: {
    headerTintColor: '#000000',
    headerStyle: {
      backgroundColor: '#ff8c00',
      height: 30,
    },
  },
});

export default class ProfileRouter extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="account-circle" size={34} color={tintColor} />
    ),
  }

  render() {
    return (
      <ProfileStack screenProps={{ ...this.props.screenProps, name: 'Oscar Jopp' }} />
    );
  }
}
