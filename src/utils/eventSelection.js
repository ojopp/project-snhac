const eventSelection = (events, listsOfAthletes, allClashes, index, team, eventIndexes) => {
  const event = Object.keys(events)[index].replace('time', '');
  const time = events[Object.keys(events)[index]];
  const listOfAthletes = listsOfAthletes[index];
  const { clashes } = allClashes[index];

  // if (listOfAthletes.length)

  let selected = false;
  let clash = false;
  const clashEvents = [];
  while (selected === false) {
    const currentAthlete = listOfAthletes[0];
    // for every clash with the current event
    for (let y = 0; y < clashes.length; y++) {
      // if an athlete has been selected for the clash
      if (team[clashes[y]]) {
        // if the selected athlete is the same as the current athlete
        if (currentAthlete.uid === team[clashes[y]].athlete) {
          // if their score in the current event is better than score in the clash event
          if (currentAthlete.score > team[clashes[y]].score) {
            // store the event in the clashEvents array
            clashEvents.push(clashes[y]);
            clash = true;
          } else {
            // remove from potential list for this event
            listsOfAthletes[index].shift();
            console.warn('1');
          }
        }
      }
    }
    if (clash === true) {
      // remove from other events
      // select next best athlete to do other event
      for (let x = 0; x < clashEvents.length; x++) {
        delete team[clashes[x]];
        delete listsOfAthletes[index][0];
        const clashIndex = eventIndexes[clashEvents[x]];
        if (listsOfAthletes[index][0]) {
          eventSelection(events, listsOfAthletes, allClashes, clashIndex, team, eventIndexes);
        } else {
          team[clashEvents[x]] = {
            time,
            athlete: '',
            score: '',
          };
        }
      }
      // place into this event
      team[event] = {
        time,
        athlete: currentAthlete.uid,
        score: currentAthlete.score,
      };
      // remove athlete from potential list of athletes
      listsOfAthletes[index].shift();
      console.warn('2');
      // end loop
      selected = true;
      return team;
    }
    selected = true;
    team[event] = {
      time,
      athlete: currentAthlete.uid,
      score: currentAthlete.score,
    };
    // remove athlete from potential list of athletes
    listsOfAthletes[index].shift();
    console.warn('3');
  }

  return team;
};
export default eventSelection;
