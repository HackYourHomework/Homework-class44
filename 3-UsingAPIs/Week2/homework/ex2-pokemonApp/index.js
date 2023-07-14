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
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Error: ' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const data = await fetchData(url);
    const pokemons = data.results;

    const selectElement = document.getElementById('pokemon-select');

    pokemons.forEach((pokemon, index) => {
      const optionElement = document.createElement('option');
      optionElement.value = pokemon.url;
      optionElement.textContent = pokemon.name;
      selectElement.appendChild(optionElement);

      // Fetch and update the image for the first Pokémon
      if (index === 0) {
        fetchImage(pokemon.url);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);
    const imageUrl = data.sprites.front_default;

    const imageElement = document.getElementById('pokemon-image');
    imageElement.src = imageUrl;
  } catch (error) {
    console.error(error);
  }
}

function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const titleElement = document.createElement('h1');
  titleElement.textContent = 'Pokemon App';
  document.body.appendChild(titleElement);
  const selectContainer = document.createElement('div');
  selectContainer.className = 'select-container';
  document.body.appendChild(selectContainer);
  const selectElement = document.createElement('select');
  selectElement.id = 'pokemon-select';
  selectContainer.appendChild(selectElement);
  const imageElement = document.createElement('img');
  imageElement.id = 'pokemon-image';
  imageElement.alt = 'Pokemon';
  document.body.appendChild(imageElement);

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      await fetchAndPopulatePokemons(url);

      const selectElement = document.getElementById('pokemon-select');
      selectElement.addEventListener('change', async (event) => {
        const selectedUrl = event.target.value;
        await fetchImage(selectedUrl);
      });
    } catch (error) {
      console.error(error);
    }
  });
}

main();
