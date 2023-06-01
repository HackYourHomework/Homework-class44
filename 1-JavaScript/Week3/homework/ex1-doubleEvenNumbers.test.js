/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-1-the-odd-ones-out

The `doubleEvenNumbers` function returns only the even numbers in the array 
passed as the `numbers` parameter and doubles them.

Let's rewrite it (or _refactor_ it, as experienced developers would call it):

- Using the `map` and `filter` functions, rewrite the function body of
`doubleEvenNumbers`.
------------------------------------------------------------------------------*/

// ! Function to be tested
function doubleEvenNumbers(numbers) {
  // TODO rewrite the function body using `map` and `filter`.
  const newNumbers = [];
  //0 < 3 ==> 8 % 2 ==> newNumbers = ['16']
  //1 < 3 ==> 9 % 2 ==> newNumbers = ['16']
  //2 < 3 ==> 10 % 2 ==> newNumbers = ['16','20']
  //3 < 3 return ['16','20']
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}
// let numbers = ['3', '4', '5', '6'];
//
const doubleTheEvenNumbers = (numbers) => {
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  evenNumbers = evenNumbers.map((evenNumber) => evenNumber * 2);
  return evenNumbers;
};

console.log(doubleTheEvenNumbers(["4", "5", "6", "7"]));


//calling function with the name of the function and the parameter it takes(the parameter requires numbers so we put one number in)
console.log(doubleEvenNumbers(['8', '9', '10']));

// // ! Unit test (using Jest)
// test('doubleEvenNumbers should take the even numbers and double them', () => {
//   const actual = doubleEvenNumbers([1, 2, 3, 4]);
//   const expected = [4, 8];
//   expect(actual).toEqual(expected);
// });
