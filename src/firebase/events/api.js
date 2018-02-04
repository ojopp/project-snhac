import firebaseApp from '../firebaseConfig';

const getEvents = (callback) => {
  const eventsRef = firebaseApp.database().ref('/events');
  eventsRef.on('value', (snap) => {
    console.warn(snap.val());
    callback(snap);
  });
};

export { getEvents };
