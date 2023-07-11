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
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP status error ` + response.status);
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

function fetchAndPopulatePokemons(data) {
  createElements();

  document.getElementById('button').addEventListener('click', () => {
    for (const item of data.results) {
      const listItem = document.createElement('option');
      listItem.value = item.name;
      listItem.className = 'pokemon-list';
      listItem.textContent = item.name;
      document.getElementById('list').appendChild(listItem);
      document.getElementById('list').style.display = 'inline';
    }
  });
}

function fetchImage() {
  createImgElement();

  const pokemonList = document.getElementById('list');

  pokemonList.addEventListener('change', async () => {
    try {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonList.value}/`;
      const data = await fetchData(pokemonUrl);
      document.getElementById('pokemon-img').alt = pokemonList.value;
      document.getElementById('pokemon-img').src = data.sprites.front_default;
    } catch (error) {
      console.error(error);
    }
  });
}

async function main() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data);
    fetchImage();
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);

const createElements = () => {
  const button = document.createElement('button');
  button.id = 'button';
  button.type = 'button';
  button.textContent = 'Get Pokemon!';

  const list = document.createElement('select');
  list.id = 'list';
  list.name = 'pokemons';

  const option = document.createElement('option');
  option.textContent = 'Choose your Pokemon';
  list.appendChild(option);

  document.body.appendChild(button);
  document.body.appendChild(list);
};

const createImgElement = () => {
  const pokemonImg = document.createElement('img');
  pokemonImg.id = 'pokemon-img';
  document.body.appendChild(pokemonImg);
};
