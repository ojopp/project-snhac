import { AsyncStorage } from 'react-native';
import firebaseApp from '../firebaseConfig';

const signUp = async (email, password, fName, lName, P10ID, gender, callback) => {
  const user = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);

  let managerBool;

  if (P10ID === 'Leader') {
    managerBool = 'true';
  } else {
    managerBool = 'false';
  }

  if (user) {
    callback();
    const User = firebaseApp.auth().currentUser;
    const userRef = firebaseApp.database().ref(`athletes/${User.uid}`);
    userRef.update({
      firstName: fName,
      gender,
      lastName: lName,
      'power-of-10-ID': P10ID,
      manager: managerBool,
    });
    user
      .updateProfile({
        displayName: `${fName} ${lName}`,
      })
      .then(() => {
        // Update successful.
      })
      .catch((error) => {
        console.warn(error);
      });

    try {
      await AsyncStorage.setItem('uid', User.uid);
      await AsyncStorage.setItem('displayName', `${fName} ${lName}`);
      await AsyncStorage.setItem('managerBool', managerBool);
    } catch (error) {
      console.warn(error);
    }
  }
};

const getManager = (uid) => {
  const managerRef = firebaseApp.database().ref(`athletes/${uid}/manager`);
  managerRef.on('value', (manager) => {
    AsyncStorage.setItem('managerBool', manager.val().toString());
  });
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
      getManager(user.uid);
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
    .catch((error) => {
      console.warn(error);
    });
};

export { signUp, login, signOut, forgotPassword };
