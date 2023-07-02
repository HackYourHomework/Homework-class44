/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-5-throw-dice-sequentially

In the previous exercise we used `Promise.all()` to throw five dice in one go.
In the current exercise we will be throwing five dice one at a time, waiting 
for a die to settle before throwing the next one. Of course, we still consider 
a die rolling off the table to be a showstopper.

To throw the dice sequentially we will be using a _promise chain_. Your job is 
to expand the given promise chain to include five dice.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

// "async" allows the use of the "await" keyword inside the function body
async function rollDice() {
  // Array to store the results of each die roll
  const results = [];
  // Iterate over the numbers [1, 2, 3, 4, 5], representing the dice numbers
  for (const i of [1, 2, 3, 4, 5]) {
    // Await the result of each rollDie() call
    const value = await rollDie(i);
    // Store the value in the results array
    results.push(value);
  }
  // Return the array of results
  return results;
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
