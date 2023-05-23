'use strict';

function selectRandomly(array) {
  const randomElement = Math.floor(Math.random() * array.length);

  return array[randomElement];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const jobTitle = selectRandomly(jobTitles);
  const partnerName = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const numKid = selectRandomly(numKids);
  return `You will be a ${jobTitle} in ${location}, 
  married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  const numKids = [1, 2, 3, 4, 5];

  const partnerNames = ['Jessica', 'Cindy', 'Aneglina', 'Marry', 'Christine'];

  const locations = ['Rotterdam', 'Utrecht', 'Zwolle', 'Amsterdam', 'Nijmegen'];

  const jobTitles = [
    'Entrepreneur',
    'Lawyer',
    'Psychologist',
    'Astronaut',
    'CEO',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
