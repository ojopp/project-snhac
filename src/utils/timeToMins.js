const timeToMins = (time) => {
  const hours = parseInt(time[0] + time[1], 10);
  const mins = parseInt(time[3] + time[4], 10);
  const ans = hours * 60 + mins;
  return ans;
};
export default timeToMins;
