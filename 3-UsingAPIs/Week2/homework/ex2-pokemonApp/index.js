'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const res = await fetch(url);
  const jsonData = await res.json();
  if (res.ok) {
    return jsonData;
  } else {
    throw new Error('HTTP error');
  }
}

function fetchAndPopulatePokemons(data) {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.textContent = 'Get Pokemon!';
  button.className = 'grid button';
  const select = document.createElement('select');
  const divForImage = document.createElement('div');

  select.className = 'grid';
  divForImage.id = 'div-for-image';

  body.appendChild(button);
  body.appendChild(select);
  body.appendChild(divForImage);
  for (let i = 0; i < data.results.length; i++) {
    const option = document.createElement('option');
    option.textContent = data.results[i].name;
    option.setAttribute('value', i);

    button.addEventListener('click', () => {
      select.appendChild(option);
    });
  }
  select.addEventListener('change', () => {
    fetchImage(data, select.value);
  });
}

function fetchImage(data, pokemonIndex) {
  const img = document.createElement('img');
  const div = document.getElementById('div-for-image');
  for (let i = 0; i < div.children.length; i++) {
    div.removeChild(div.children[i]);
  }
  img.className = 'grid';
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  img.setAttribute('alt', data.results[pokemonIndex].name);
  div.appendChild(img);
}

async function main() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const data = await fetchData(url);
    fetchAndPopulatePokemons(data);
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main);
