'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/
const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
  
}

function renderLaureate({ knownName, birth, death }) {
  console.log(`Name: ${knownName.en}`);
  console.log(`Birth: ${birth.date}, ${birth.place.locationString.en}`);
  if(death!=="still alive"){console.log(`Death: ${death.date}, ${death.place.locationString.en}`)}
  else {console.log('still alive')}
}

function renderLaureates(laureates) {

  const laureateArray = laureates.filter((laureate)=> laureate.birth.place.country.en  === "the Netherlands")
  .map((laureate) => {
    return {
      knownName: laureate.knownName,
      birth: laureate.birth,
      ...((laureate.death) ? { death: laureate.death } : { death: 'still alive' })
    };
  });

  laureateArray.forEach(element => {
    renderLaureate(element)
  });
}

async function fetchAndRender() {
  try {
    const data = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    const laureates = data.laureates;
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
    console.log(err.stack);
  }
}

fetchAndRender();
