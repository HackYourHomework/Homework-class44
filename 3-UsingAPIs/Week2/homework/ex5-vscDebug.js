'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/


const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function renderLaureate(laureate) {
  const { knownName, birth, death } = laureate;
  console.log(`\nName: ${knownName.en}`);
  console.log(`Birth: ${birth.date}, ${birth.place.locationString}`);
  if (death) {
    console.log(`Death: ${death.date}, ${death.place.locationString}`);
  }
}

async function renderLaureates() {
  try {
    const data = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    const laureates = data.laureates;
    laureates.forEach(renderLaureate);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

renderLaureates();

