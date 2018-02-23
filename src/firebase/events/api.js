import { AsyncStorage } from 'react-native';
import firebaseApp from '../firebaseConfig';

const getEvents = (callback) => {
  const eventsRef = firebaseApp.database().ref('/events');
  eventsRef.on('value', (snap) => {
    callback(snap.val());
  });
};

const addAttendee = (eventID) => {
  try {
    AsyncStorage.getItem('uid').then((uid) => {
      firebaseApp
        .database()
        .ref(`events/${eventID}/attendees`)
        .child(uid)
        .update({
          coach: true,
        });
    });
  } catch (error) {
    // Error getting data or no data
  }
};

const createEvent = (date, Name, id, eventInfo, location) => {
  const eventsRef = firebaseApp.database().ref('events');
  eventsRef.update({
    attendees: false,
    date,
    eventName: Name,
    id,
    information: eventInfo,
    location,
  });
};

const getAthleteData = (callback) => {
  const eventsRef = firebaseApp.database().ref('/athletes');
  eventsRef.on('value', (snap) => {
    callback(snap.val());
  });
};

const generateLists = () => {};

export { getEvents, addAttendee, getAthleteData, createEvent };
