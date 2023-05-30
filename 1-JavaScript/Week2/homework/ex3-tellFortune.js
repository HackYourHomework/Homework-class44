'use strict';
function selectRandomly(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function tellFortune(nk, pn, l, j) {
  const kidsNumber = selectRandomly(nk);
  const partnerName = selectRandomly(pn);
  const location = selectRandomly(l);
  const job = selectRandomly(j);
  return `You will be a ${job} in ${location}, married to ${partnerName} with ${kidsNumber} kids.`;
}

function main() {
  const numKids = [1, 2, 3, 4, 5];

  const partnerNames = ['john', 'Mo', 'Omar', 'Eve', 'Adam'];

  const locations = ['Usa', 'Uk', 'Arnhem', 'Amersfoort', 'Sweden'];

  const jobTitles = ['teacher', 'doctor', 'software dev', 'cleaner', 'singer'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
