import findClashes from './findClashes';
import eventSelection from './eventSelection';
import generateEventIndexes from './generateEventIndexes';

const selectTeam = async (events, listsOfAthletes) => {
  let currentTeam = {};
  const clashes = findClashes(events);
  const eventIndexes = generateEventIndexes(events);
  for (let index = 0; index < Object.keys(events).length; index++) {
    if (listsOfAthletes[index].length > 0) {
      currentTeam = eventSelection(
        events,
        listsOfAthletes,
        clashes,
        index,
        currentTeam,
        eventIndexes,
      );
    }
  }
  return currentTeam;
};

export default selectTeam;
