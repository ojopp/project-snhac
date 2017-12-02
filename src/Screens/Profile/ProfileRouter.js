import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ProfileScreen from './Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileStack = StackNavigator({
  Home: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
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
      <ProfileStack screenProps={this.props.screenProps} />
    );
  }
}
