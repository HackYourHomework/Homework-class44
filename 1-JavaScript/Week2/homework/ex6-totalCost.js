'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 1.0,
  chips: 3.0,
  jucies: 2.0,
  fruits: 5.0,
  breads: 6.0,
};

function calculateTotalPrice(shoppingCart) {
  let total = 0;

  for (let item in shoppingCart) {
    total = total + shoppingCart[item];
  }

  return 'Total: €' + total.toFixed(2);
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
}

function test() {
  test1();
  test2();
}

test();
