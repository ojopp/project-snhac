import { AsyncStorage } from 'react-native';
import firebaseApp from '../firebaseConfig';

const getEvents = (callback) => {
  const eventsRef = firebaseApp.database().ref('/events');
  eventsRef.on('value', (snap) => {
    callback(snap.val());
  });
};

const getEventTimes = (event, callback) => {
  const eventsRef = firebaseApp.database().ref(`/events/${event}/time`);
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
  const ref = firebaseApp.database().ref('/athletes');
  ref.on('value', (snap) => {
    callback(snap.val());
  });
};

const getAthletesEventScores = (athlete, callback) => {
  const eventsRef = firebaseApp.database().ref(`/athletes/${athlete}/events`);
  eventsRef.on('value', (snap) => {
    const events = snap.val();
    const maleAthletesEvents = [];
    for (let x = 0; x < Object.keys(events).length; x++) {
      const event = events[Object.keys(events)[x]];
      const ukScore = (501 - event.ukRank) * (1 / 500);
      const clubScore = (11 - event.clubRank) * (1 / 10);
      const overallScore = ukScore + clubScore;
      const eventObject = {
        eventName: Object.keys(events)[x],
        eventScore: overallScore,
      };
      maleAthletesEvents.push(eventObject);
    }
    callback({
      uid: athlete,
      events: maleAthletesEvents,
    });
  });
};

const getAthleteName = async (uid, callback) => {
  const athleteRef = firebaseApp.database().ref(`athletes/${uid}`);
  athleteRef.on('value', (snap) => {
    const name = `${snap.val().firstName} ${snap.val().lastName}`;
    const gender = `${snap.val().gender}`;
    const athlete = [name, gender];
    callback(athlete);
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
  time100mMale,
  time200mMale,
  time400mMale,
  time800mMale,
  time1500mMale,
  time110mHMale,
  timeHJMale,
  timeLJMale,
  timePVMale,
  timeTJMale,
  time100mFemale,
  time200mFemale,
  time400mFemale,
  time800mFemale,
  time1500mFemale,
  time110mHFemale,
  timeHJFemale,
  timeLJFemale,
  timePVFemale,
  timeTJFemale,
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
      time100mMale,
      time200mMale,
      time400mMale,
      time800mMale,
      time1500mMale,
      time110mHMale,
      timeHJMale,
      timeLJMale,
      timePVMale,
      timeTJMale,
      time100mFemale,
      time200mFemale,
      time400mFemale,
      time800mFemale,
      time1500mFemale,
      time110mHFemale,
      timeHJFemale,
      timeLJFemale,
      timePVFemale,
      timeTJFemale,
    },
  });
};

const generateLists = () => {};

export {
  getEvents,
  getEventTimes,
  getAthleteData,
  getAthletesEventScores,
  getAthleteName,
  getAttendance,
  deleteEvent,
  createEvent,
  addAttendee,
  removeAttendee,
};
