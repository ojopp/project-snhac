import { AsyncStorage } from 'react-native';
import firebaseApp from '../firebaseConfig';

const getEvents = (callback) => {
  const eventsRef = firebaseApp.database().ref('/events');
  eventsRef.on('value', (snap) => {
    callback(snap.val());
  });
};

const getAttendance = (eventID, callback) => {
  try {
    // console.warn(teamBus);
    AsyncStorage.getItem('uid').then((uid) => {
      const attendanceRef = firebaseApp
        .database()
        .ref(`events/${eventID}/attendees`)
        .child(uid);
      attendanceRef.on('value', (snap) => {
        callback(snap);
      });
    });
  } catch (error) {
    // Error getting data or no data
  }
};

const getAthleteData = (callback) => {
  const eventsRef = firebaseApp.database().ref('/athletes');
  eventsRef.on('value', (snap) => {
    callback(snap.val());
  });
};

const addAttendee = (eventID, teamBus) => {
  try {
    // console.warn(teamBus);
    AsyncStorage.getItem('uid').then((uid) => {
      firebaseApp
        .database()
        .ref(`events/${eventID}/attendees`)
        .child(uid)
        .update({
          coach: teamBus,
        });
    });
  } catch (error) {
    // Error getting data or no data
  }
};

const removeAttendee = (eventID) => {
  try {
    // console.warn(teamBus);
    AsyncStorage.getItem('uid').then((uid) => {
      firebaseApp
        .database()
        .ref(`events/${eventID}/attendees`)
        .child(uid)
        .remove();
    });
  } catch (error) {
    // Error getting data or no data
  }
};

const deleteEvent = (id) => {
  const eventsRef = firebaseApp.database().ref(`events/${id}`);
  eventsRef.remove();
};

const createEvent = (
  Name,
  date,
  eventInfo,
  location,
  id,
  time100m,
  time200m,
  time400m,
  time800m,
  time1500m,
  time110mH,
  timeHJ,
  timeLJ,
  timePV,
  timeTJ,
) => {
  const eventsRef = firebaseApp.database().ref(`events/${id}`);
  eventsRef.update({
    attendees: false,
    date,
    eventName: Name,
    information: eventInfo,
    location,
    id,
    time: {
      time100m,
      time200m,
      time400m,
      time800m,
      time1500m,
      time110mH,
      timeHJ,
      timeLJ,
      timePV,
      timeTJ,
    },
  });
};

const generateLists = () => {};

export {
  getEvents,
  getAthleteData,
  getAttendance,
  deleteEvent,
  createEvent,
  addAttendee,
  removeAttendee,
};
