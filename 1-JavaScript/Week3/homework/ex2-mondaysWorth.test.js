'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30,
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(arr, hr) {
  let expected = 0;
  const newArr = arr.map((el) => {
    return (el.duration / 60) * hr;
  });
  newArr.forEach((element) => {
    expected += element;
  });
  return '€' + expected.toFixed(2);
}
// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
