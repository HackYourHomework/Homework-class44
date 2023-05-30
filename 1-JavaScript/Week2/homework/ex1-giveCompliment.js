'use strict';

function giveCompliment(name) {
  const compliments = [
    'great',
    'awesome',
    'fantastic',
    'super',
    'nice',
    'cool',
    'wow',
    'good',
    'wonderful',
    'amazing',
  ];
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];
  return `You are ${randomCompliment}, ${name}!`;
}

function main() {
  const myName = 'Chouaib';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'John';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
