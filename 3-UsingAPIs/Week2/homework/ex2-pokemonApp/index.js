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
'use strict';

// Fetch data from the provided URL
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw error; // Rethrow the error to propagate it
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const selectElement = document.getElementById('pokemon-select');

  try {
    const data = await fetchData(url);
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to propagate it
  }

  selectElement.style.display = 'block';
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);
    const imageUrl = data.sprites.front_default;
    return imageUrl;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to propagate it
  }
}

async function main() {
  const getButton = document.getElementById('get-pokemon-button');
  const selectElement = document.getElementById('pokemon-select');
  const imgElement = document.getElementById('pokemon-image');

  getButton.addEventListener('click', function () {
    selectElement.style.display = 'block';
  });

  try {
    await fetchAndPopulatePokemons();
  } catch (error) {
    console.error(error);
  }

  selectElement.addEventListener('change', async function () {
    const url = selectElement.value;
    try {
      const imageUrl = await fetchImage(url);
      imgElement.src = imageUrl;
    } catch (error) {
      console.error(error);
    }
  });
}

window.addEventListener('load', main);
