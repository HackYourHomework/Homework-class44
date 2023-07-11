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

'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

function fetchAndPopulatePokemons() {
  const selectElement = document.querySelector('select');

  fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(data => {
      const pokemons = data.results;

      pokemons.forEach(pokemon => {
        const optionElement = document.createElement('option');
        optionElement.value = pokemon.name;
        optionElement.textContent = pokemon.name;

        selectElement.appendChild(optionElement);
      });
    });
}

async function fetchImage() {
  try {
    const selectElement = document.querySelector('select');
    const pokemonName = selectElement.value;

    const pokemonData = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const imageUrl = pokemonData.sprites.front_default;

    const imageElement = document.querySelector('img');
    imageElement.src = imageUrl;
  } catch (error) {
    console.error('Error:', error);
  }
}

function main() {
  fetchAndPopulatePokemons();

  const selectElement = document.querySelector('select');
  selectElement.addEventListener('change', fetchImage);
}

window.addEventListener('load', main);





