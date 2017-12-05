import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  settings: {
    paddingRight: 8,
  },
});


export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ screenProps, navigation }) => ({
    headerRight: (
      <TouchableOpacity
        style={styles.settings}
        // onPress={() => screenProps.signOut()}
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon name="settings" size={24} color='#232A30' />
      </TouchableOpacity>
    ),
  })

  render() {
    return (
      <View style={styles.container} />
    );
  }
}
