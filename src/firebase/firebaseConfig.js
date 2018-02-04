import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAK0Dz0LZBHw1XmVMB7O7jbAhmA7GcD3MM',
  authDomain: 'project-snhac.firebaseapp.com',
  databaseURL: 'https://project-snhac.firebaseio.com',
  projectId: 'project-snhac',
  storageBucket: '',
  messagingSenderId: '54305322863',
};

firebase.initializeApp(config);

export default firebase;
