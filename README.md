# Javascript Function Syntax: Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

```
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
```
