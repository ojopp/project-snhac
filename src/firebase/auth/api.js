import { AsyncStorage } from 'react-native';
import firebaseApp from '../firebaseConfig';

const signUp = async (email, password, fName, lName, P10ID, callback) => {
  const user = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);

  if (user) {
    callback();
    const User = firebaseApp.auth().currentUser;
    const userRef = firebaseApp.database().ref(`athletes/'${User.uid}`);
    userRef.update({
      'first-name': fName,
      'last-name': lName,
      'power-of-10-ID': P10ID,
    });
    user
      .updateProfile({
        displayName: `${fName} ${lName}`,
      })
      .then(() => {
        // Update successful.
      })
      .catch(() => {
        // Error saving data
      });
    try {
      await AsyncStorage.setItem('uid', User.uid);
      await AsyncStorage.setItem('displayName', `${fName} ${lName}`);
    } catch (error) {
      // Error saving data
    }
  }
};

const login = async (email, password, callback) => {
  await firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.warn(error);
    })
    .then(async (user) => {
      firebaseApp
        .database()
        .ref()
        .update({
          Users: user.uid,
        });

      AsyncStorage.setItem('uid', user.uid);
      AsyncStorage.setItem('displayName', user.displayName);
      callback();
    });
};

const signOut = async (callback) => {
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      callback();
    });
};

const forgotPassword = async (email) => {
  firebaseApp
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      // Email sent.
    })
    .catch(() => {
      // An error happened.
    });
};

export { signUp, login, signOut, forgotPassword };
