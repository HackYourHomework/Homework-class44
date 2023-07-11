'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
'use strict';
// ! Do not remove this line


const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(rollDie);
  
  try {
    const result = await Promise.race(promises);
    return result;
  } catch (error) {
    throw new Error('All dice rolled off the table!');
  }
}

async function main() {
  try {
    const result = await rollDice();
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

module.exports = rollDice;


// ?================================
// the last dice will continue rolling until their asynchronous operations complete.
