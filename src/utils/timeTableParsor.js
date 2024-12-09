export const timeTableParsor = (value) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const result = {};

  for (let col = 0; col < 7; col++) {
    const day = days[col];
    result[day] = [];
    let start = null;

    for (let row = 0; row < value.length; row++) {
      if (value[row][col]) {
        if (start === null) {
          start = row;
        }
      } else {
        if (start !== null) {
          result[day].push({ startTime: start, endTime: row - 1 });
          start = null;
        }
      }
    }

    if (start !== null) {
      result[day].push({ startTime: start, endTime: value.length - 1 });
    }
  }

  return JSON.stringify(result);
};
