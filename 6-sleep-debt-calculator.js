let getSleepHours = day => {
  if (day === `monday`) {
    return 8;
  } else if (day === `tuesday`) {
    return 7;
  } else if (day === `wednesday`) {
    return 8;
  } else if (day === `thursday`) {
    return 7;
  } else if (day === `friday`) {
    return 5;
  } else if (day === `saturday`) {
    return 9;
  } else if (day === `sunday`) {
    return 10;
  } 
}

const getActualSleepHours = () => {
  return getSleepHours(`Monday`) +
  getSleepHours(`Tuesday`) +
  getSleepHours(`Wednesday`) +
  getSleepHours(`Thursday`) +
  getSleepHours(`Friday`) +
  getSleepHours(`Saturday`) +
  getSleepHours(`Sunday`);
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('You got exactly the right amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed!');
  } else {
      console.log('Get some sleep.');
  }
  if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}};

calculateSleepDebt();