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
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  }

  return response.json();
}

async function fetchAndPopulatePokemons(url, selectElement) {
  try {
    const data = await fetchData(url);

    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.text = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.log('Error while fetching and populating pokemons:', error);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);

    imgElement.src = data.sprites.front_default;
    imgElement.alt = data.forms[0].name;
  } catch (error) {
    console.log('Error while fetching and updating image:', error);
  }
}

async function main() {
  const pokemonSelectElement = document.createElement('select');
  pokemonSelectElement.id = 'pokemon-select';
  document.body.appendChild(pokemonSelectElement);

  const imageElement = document.createElement('img');
  imageElement.id = 'pokemon-image';
  document.body.appendChild(imageElement);

  const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  await fetchAndPopulatePokemons(apiURL, pokemonSelectElement);

  pokemonSelectElement.addEventListener('change', () => {
    const selectedPokemonURL = pokemonSelectElement.value;

    fetchImage(selectedPokemonURL, imageElement);
  });
}

window.addEventListener('load', main);
