const generateEventIndexes = (events) => {
  const indexes = {};
  for (let x = 0; x < Object.keys(events).length; x++) {
    const event = Object.keys(events)[x].replace('time', '');
    indexes[event] = x;
  }
  return indexes;
};

export default generateEventIndexes;
