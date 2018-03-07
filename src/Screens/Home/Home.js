import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={34} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}
