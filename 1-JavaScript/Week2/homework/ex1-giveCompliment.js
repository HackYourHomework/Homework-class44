'use strict';
/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {

  const compliments = [
    "compliment 1",
    "compliment 2",
    "compliment 3",
    "compliment 4",
    "compliment 5",
    "compliment 6",
    "compliment 7",
    "compliment 8",
    "compliment 9",
    "compliment 10"
  ];

  //  Getting  a random element from the array

  const randomCompliment = compliments.sample();

  const message = `You are ${randomCompliment}, ${name}!`;
  return message;
}


Array.prototype.sample = function () {

  const randomIndex = Math.floor(Math.random() * this.length);

  return this[randomIndex];
}

function main() {
  const myName = 'Your Name';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Another Name';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

main();


// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
