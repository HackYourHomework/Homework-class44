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
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(
            new Error(`HTTP Status Code: ${response.status}: Request failed`)
          );
        }
      })
      .catch((error) => {
        throw error;
      });
  });
}

function fetchAndPopulatePokemons(data) {
  const selectElem = document.createElement('select');
  selectElem.id = 'select';
  const emptyOption = document.createElement('option');
  emptyOption.selected = true;
  emptyOption.disabled = true;
  emptyOption.textContent = 'Select a Pokemon';
  selectElem.appendChild(emptyOption);

  for (const pokemon of data.results) {
    const optionElem = document.createElement('option');
    optionElem.textContent = pokemon.name;
    optionElem.setAttribute('data-url', pokemon.url);
    selectElem.appendChild(optionElem);
  }
  console.log(data.results);
  const img = document.createElement('img');
  img.id = 'pokemon-img';
  document.body.appendChild(selectElem);
  document.body.appendChild(img);
}

function fetchImage(url) {
  fetch(url)
    .then((response) => {
      response.json().then((response) => {
        const img = document.getElementById('pokemon-img');
        img.src = response.sprites.other.home.front_default;
        document.body.appendChild(img);
      });
    })
    .catch((error) => {
      throw error;
    });
}

async function main() {
  try {
    const response = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    await response.json().then((data) => {
      fetchAndPopulatePokemons(data);
    });
    document.getElementById('select').addEventListener('change', (event) => {
      const selectedPokemonUrl =
        event.srcElement.options[event.srcElement.selectedIndex].dataset.url;
      fetchImage(selectedPokemonUrl);
    });
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main());
