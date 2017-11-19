import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import firebaseApp from '../firebase/firebaseConfig';

const styles = StyleSheet.create({
  container: {
    height: 55,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingBottom: 3,
  },
  txt: {
    fontSize: 16,
    color: '#ff8c00',
  },
  topBar: {
    height: 40,
    backgroundColor: '#000000',
  },
});

export default () => (
  <View>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <Text style={styles.txt}>
        Training
      </Text>
    </View>
  </View>
);
