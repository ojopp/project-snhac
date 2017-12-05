import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import OnbordingBackground from '../components/OnbordingBg';

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
    height: '100%',
  },
  txt: {
    color: '#232A30',
    backgroundColor: '#00000000',
  },
});

export default class HowToAthleteID extends React.Component {
  static navigationOptions = {
  }

  render() {
    return (
      <View>
        <OnbordingBackground />
        <View style={styles.container}>
          <Text style={styles.txt}>
            1. Go to http://www.thepowerof10.info
          </Text>
          <Text style={styles.txt}>
            2. Type in your first name and last name
          </Text>
          <Text style={styles.txt}>
            3. Type 'SNHAC' in the club field
          </Text>
          <Text style={styles.txt}>
            4. Find yourself and click 'show profile'
          </Text>
          <Text style={styles.txt}>
            5. The last 6 digits in the website URL is your athlete profile
          </Text>
        </View>
      </View>
    );
  }
}
