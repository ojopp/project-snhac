import addItemToSortedArray from './addItemToSortedArray';

const generateEventLists = (event, athletesEventScores) => {
  let orderedAthletes = [];
  // see who does the event and get their score
  // for every athlete
  for (let x = 0; x < athletesEventScores.length; x++) {
    // if they do this event
    const thisEvent = athletesEventScores[x].events.find(eventObject => eventObject.eventName === event);
    if (thisEvent) {
      orderedAthletes = addItemToSortedArray(orderedAthletes, {
        uid: athletesEventScores[x].uid,
        score: thisEvent.eventScore,
      });
    }
  }
  return orderedAthletes.reverse();
};

export default generateEventLists;
