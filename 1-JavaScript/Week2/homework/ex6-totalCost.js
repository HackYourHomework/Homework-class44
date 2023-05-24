'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  soda: 1.50,
  cake: 4.99,
  balloons: 2.49,
};

function calculateTotalPrice(cart) {
  // use Object.values to get an array of the values of the cart object
  const values = Object.values(cart);

  // use reduce to sum up the values in the array
  const sum = values.reduce((a, b) => a + b, 0);

  return "Total: €" + sum.toFixed(2);
}


function test1() {
  console.log('Test 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('Test 2: return correct output when passed cartForParty');
  const expected = "Total: €11.72";
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
}

test();
