import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  gradientBg: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  txt: {
    color: '#232A30',
    backgroundColor: '#00000000',
  },
});

const BackgroundSource = require('../assets/OnbordingBackground.png');

export default class ForgotPassword extends React.Component {
  static navigationOptions = {
  }

  render() {
    return (
      <View>
        <Image stylr={styles.gradientBg} source={BackgroundSource} resizeMode="stretch" />
        <View style={styles.container}>
          <Text style={styles.txt}>
            (Password reset link)
          </Text>
        </View>
      </View>
    );
  }
}
