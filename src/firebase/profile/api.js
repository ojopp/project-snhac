import firebaseApp from '../firebaseConfig';

const getPerformances = (callback) => {
  const eventsRef = firebaseApp.database().ref('athletes/hSMQCRThWZZTTGKLNWN3XTDiAZ62/events');
  eventsRef.on('value', (snap) => {
    callback(snap.val());
  });
};

export default { getPerformances };
