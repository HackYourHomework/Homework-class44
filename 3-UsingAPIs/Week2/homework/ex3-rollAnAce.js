'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-3-roll-an-ace

1. Run the unmodified exercise and observe that it works as advertised. Observe 
   that the die must be thrown an indeterminate number of times until we get an 
   ACE or until it rolls off the table.
2. Now, rewrite the body of the `rollDieUntil()` function using async/await and 
   without using recursion. Hint: a `while` loop may come handy.
3. Refactor the function `main()` to use async/await and try/catch.
------------------------------------------------------------------------------*/

const rollDie = require('../../helpers/pokerDiceRoller');

function rollDieUntil(wantedValue) {
  while(true) {
    try {
    return rollDie().then((value) => {
      if (value === wantedValue) {
        return value;
      }
    });
  } catch (error) {
    console.error('error', error)
    throw error
  }

}
}


async function main() {
  try {
    const result = await rollDieUntil('ACE')
    console.log('Resolved!', result)
  } catch (error) {
    console.error('Error', error)
  }
}
module.exports = rollDieUntil;
