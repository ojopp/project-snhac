import timeToMins from './timeToMins';

const findClashes = (timetable) => {
  const eventObjects = [];
  for (let i = 0; i < Object.keys(timetable).length; i++) {
    const mainPreTime = timeToMins(timetable[Object.keys(timetable)[i]]) - 50;
    const mainPostTime = timeToMins(timetable[Object.keys(timetable)[i]]) + 50;
    const eventClashes = [];
    for (let x = 0; x < Object.keys(timetable).length; x++) {
      if (Object.keys(timetable)[i] !== Object.keys(timetable)[x]) {
        const checkTime = timeToMins(timetable[Object.keys(timetable)[x]]);
        if (mainPreTime < checkTime && mainPostTime > checkTime) {
          eventClashes.push(Object.keys(timetable)[x].replace('time', ''));
        }
      }
    }
    eventObjects.push({
      event: Object.keys(timetable)[i].replace('time', ''),
      clashes: eventClashes,
    });
  }
  return eventObjects;
};
export default findClashes;
