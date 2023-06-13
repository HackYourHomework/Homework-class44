'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-3-lemon-allergy

Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
------------------------------------------------------------------------------*/
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
function sanitizeFruitBasket(fruitBasket) {
  const sanitizedBasket = fruitBasket.filter((fruit) => fruit !== 'lemon');
  return sanitizedBasket;
}

const sanitizedFruitBasket = sanitizeFruitBasket(fruitBasket);
console.log(sanitizedFruitBasket); // Output: ['apple', 'grapefruit', 'banana', 'watermelon']

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should remove all occurrences of "lemon"', () => {
    const result = sanitizeFruitBasket(fruitBasket);
    const expected = ['apple', 'grapefruit', 'banana', 'watermelon'];
    expect(result).toEqual(expected);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    sanitizeFruitBasket(fruitBasket);
    expect(fruitBasket).toEqual(originalFruitBasketContents);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const result = sanitizeFruitBasket(fruitBasket);
    expect(result.includes('lemon')).toBe(false);
  });
});



