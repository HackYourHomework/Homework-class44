'use strict';

function giveCompliment(name) {
  const compliments = [
    'Excellent',
    'Fabulous',
    'Trreffic',
    'Glorious',
    'Marvelous',
    'Awesome',
    'Fantastic',
    'Amazing',
    'Outstanding',
    'Gorgeous',
  ];

  const compliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'Milad';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
