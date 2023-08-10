/* 
Goal: Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments 

ex. node timer1.js 10 3 5 15 9 
Will beep at 3 5 9 10 15

Edge cases: 
1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/

const args = process.argv.slice(2); // Slice first two files off of array

const timer = function(numbers) {
  for (const number of numbers) { // Loop through numbers 
    const timer = number * 1000; // Set the timer 
    if (isNaN(timer) || timer < 0) { // If NaN or negative 
      continue;
    }
    setTimeout(() => {
      console.log('BEEP', number) /* Can't get the actual beep to work, so 'beep' it is.. */
    }, timer)
  }
};

timer(args);

