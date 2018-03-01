const dateSuffix = (date) => {
  if (date > 3) {
    return 'th';
  } else if (date === 3) {
    return 'rd';
  } else if (date === 2) {
    return 'nd';
  }
  return 'st';
};

export default dateSuffix;
