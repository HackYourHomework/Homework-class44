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
const renderUi = () => {
  const ui = document.body;
  ui.style.display = 'flex';
  ui.style.flexDirection = 'column';
  ui.style.alignItems = 'center';
  ui.style.justifyContent = 'center';
  ui.style.gap = '10px';

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.textContent = 'Get Pokemons!';

  const select = document.createElement('select');
  const image = document.createElement('img');
  image.style.width = '250px';

  ui.appendChild(button);
  ui.appendChild(select);
  ui.appendChild(image);
};

async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(data) {
  const selectElement = document.querySelector('select');
  data.results.forEach((pokemon) => {
    const optionElement = document.createElement('option');
    optionElement.value = pokemon.url;
    optionElement.textContent = pokemon.name;
    selectElement.appendChild(optionElement);
  });
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);
    const imgElement = document.querySelector('img');
    imgElement.src = data.sprites.front_default;
    imgElement.alt = data.name;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  renderUi();

  const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=151`);

  const buttonElement = document.querySelector('button');
  buttonElement.addEventListener('click', () => {
    fetchAndPopulatePokemons(data);
  });

  const selectElement = document.querySelector('select');
  selectElement.addEventListener('change', (event) => {
    const selectedUrl = event.target.value;
    fetchImage(selectedUrl);
  });
}

document.addEventListener('DOMContentLoaded', main);
