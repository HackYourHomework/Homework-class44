'use strict';

function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
        return;
      }

      if (roll === randomRollsToDo) {
        resolve(value);
        return;
      }

      setTimeout(() => rollOnce(roll + 1), 500);
    };

    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((value) => {
      console.log(`Success! Die settled on ${value}.`);
    })
    .catch((error) => {
      console.log(error);
    });
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

module.exports = rollDie;
