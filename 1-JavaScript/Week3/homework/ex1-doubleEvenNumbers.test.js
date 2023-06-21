function doubleEvenNumbers(numbers) {
  const newNumbers = numbers
    .filter((num) => {
      return num % 2 === 0;
    })
    .map((num) => {
      return num * 2;
    });
  return newNumbers;
}

test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});
