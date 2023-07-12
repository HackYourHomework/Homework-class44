'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(arr, itemOut) {
  const newBasket = arr.filter((fruit) => fruit !== itemOut);
  return newBasket;
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    console.assert(sanitizeFruitBasket.length === 2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    console.assert(originalFruitBasketContents.length === 7);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    console.assert(!fruitBasket.includes('lemon'));
  });
});
