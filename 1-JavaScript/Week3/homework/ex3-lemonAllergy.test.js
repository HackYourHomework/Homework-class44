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
function sanitizeFruitBasket(fruitBasket, sanitized) {
  
  const filteredFruit = fruitBasket.filter(filtered => filtered !== sanitized);
//  added this return that i had forgoten to add before
  return filteredFruit;
}
console.log(sanitizeFruitBasket(fruitBasket, 'lemon'));

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    
    
    expect(sanitizeFruitBasket.fruitBasket).toBe(sanitized);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    
    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(false).toBe(true);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
   
    const result = sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(false).toBe(true);
  });
});


