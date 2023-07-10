const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promisesArr = dice.map((roll) => {
    return rollDie(roll);
  });
  console.log(promisesArr);
  return Promise.all(promisesArr);
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

// reject doesn't stop the Asynchronous operation it just show the error
