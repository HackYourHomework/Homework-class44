'use strict';

const cartForParty = [
  { name: 'beer', amount: 3 },
  { name: 'chips', amount: 1.7 },
  { name: 'water', amount: 2 },
  { name: 'salt', amount: 3 },
  { name: 'jus', amount: 1.5 },
];

function calculateTotalPrice(cartForParty) {
  let total = 0;
  for (let i = 0; i < cartForParty.length; i++) {
    total = total + cartForParty[i].amount;
  }
  return total;
}

console.log('Total price: € ' + calculateTotalPrice(cartForParty));

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 11.2;
  const result = calculateTotalPrice(cartForParty);
  console.assert(expected === result);
}

function test() {
  test1();
  test2();
}

test();
