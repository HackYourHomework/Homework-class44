/* eslint-disable hyf/no-commented-out-code */
/* eslint-disable no-unused-vars */
'use strict';
const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

function filterPrivateData(data) {
  const newArr = [];
  for (let i = 0; i < data.length; i++) {
    const { gender, salary, ...rest } = data[i];

    newArr.push(rest);
  }
  return newArr;
}

function test1() {
  console.log('Test 1: filterPrivateData should take one parameters');
  console.assert(filterPrivateData.length === 1);
}

function test2() {
  console.log('Test 2: gender and salary should be filtered out');
  const expected = [
    {
      name: 'John',
      occupation: 'developer',
      email: 'john.doe@somewhere.net',
    },
    {
      name: 'Jane',
      occupation: 'manager',
      email: 'jane.eyre@somewhere.net',
    },
  ];
  const result = filterPrivateData(employeeRecords);

  console.assert(JSON.stringify(result) === JSON.stringify(expected));
}

function test() {
  test1();
  test2();
}

test();
