import { getAthletesEventScores, getEventTimes } from '.././firebase/events/api';
import findClashes from './findClashes';

const ScoreAthletes = (athleteUIDs, meet) => {
  const eventScores = [];
  let eventClashes = [];

  getEventTimes(meet.id, (timetable) => {
    eventClashes = findClashes(timetable);
  });

  // Gets initial scores and creates the array of athlete objects
  for (let athlete = 0; athlete < athleteUIDs.length; athlete++) {
    getAthletesEventScores(athleteUIDs[athlete], (athletesEventScores) => {
      eventScores.push(athletesEventScores);
    });
  }

  // Cost Of Athlete
  // for every athlete
  for (let athlete = 0; athlete < eventScores.length; athlete++) {
    // for every event they do
    for (let x = 0; x < eventScores[athlete].events.length; x++) {
      let betterClashEvents = 0;
      const currentEventScore = eventScores[athlete].events[x].eventScore;
      const currentEventClashes = eventClashes.find(eventObject => eventObject.event === eventScores[athlete].events[x].eventName).clashes;
      // for every clash with that event
      for (let y = 0; y < currentEventClashes.length; y++) {
        // if they do the clash event && clashEvent.Score > eventScore
        const clashEvent = eventScores[athlete].events.find(event => event.eventName === currentEventClashes[y]);
        if (clashEvent) {
          if (clashEvent.eventScore > currentEventScore) {
            // add 1 to betterClashEvents
            betterClashEvents += 1;
          }
        }
      }
      // event.score = event.score - (betterClashEvents * 0.1)
      eventScores[athlete].events[x].eventScore -= betterClashEvents * 0.1;
    }
  }
  return eventScores;
};

export default ScoreAthletes;
