import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar, ScrollView,
} from 'react-native';
import firebaseApp from '../firebase/firebaseConfig';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ff8c00',
    paddingTop: 20,

  },
  input: {
    height: 50,
    marginTop: 10,
    marginHorizontal: 20,
    paddingLeft: 20,
    alignSelf: 'stretch',
    backgroundColor: '#ffac49',
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    borderRadius: 6,
    color: '#ffffff',
  },
  button: {
    height: 50,
    marginTop: 30,
    marginHorizontal: 60,
    padding: 4,
    alignSelf: 'stretch',
    backgroundColor: '#000000',
    borderRadius: 8,

  },
  buttonText: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',

  },
});

export default class Login extends React.Component {
    static navigationOptions = {
      title: 'Login',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#000000',
      },
    };

    constructor() {
      super();
      this.state = {
        email: '',
        paasword: '',
      };
    }


    onPressLogin() {
      const { dispatch, navigate } = this.props.navigation;
      // firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      //  var errorCode = error.code;
      //  var errorMessage = error.message;
      //  alert(errorMessage)
      // ...
      // });
      // this.props.navigation.navigate('HomeApp')

      const navigationAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'HomeApp' }),
        ],
      });


      dispatch(navigationAction);
    }


    render() {
      return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ff8c00' }} keyboardShouldPersistTaps="never" scrollEnabled={false}>
          <View behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TextInput
              style={styles.input}
              onChangeText={value => this.setState({ email: value })}
              placeholder="Email"
              placeholderTextColor="#ffffffa0"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              onChangeText={value => this.setState({ password: value })}
              placeholder="Password"
              placeholderTextColor="#ffffffa0"
              secureTextEntry
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressLogin.bind(this)}
            >
              <Text style={styles.buttonText}>
              Log in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
}

