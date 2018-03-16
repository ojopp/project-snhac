const addItemToSortedArray = (array, item) => {
  // go through the array
  let x = 0;
  let found = false;
  while (found === false) {
    // if it has not reached the end
    if (x < array.length) {
      // if the score is higher put item in this position of the array
      if (array[x].score > item.score) {
        found = true;
        array.splice(x, 0, item);
      } else {
        x += 1;
      }
      // if no highes score has been found in the array
    } else {
      // add to the end of the array
      found = true;
      array.push(item);
    }
  }
  return array;
};

export default addItemToSortedArray;
