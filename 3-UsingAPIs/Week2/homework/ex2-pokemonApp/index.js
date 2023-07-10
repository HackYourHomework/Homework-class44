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
  // TODO complete this function
  return fetch(url)
  .then((response)=>{
    if(!response.ok){
      throw new Error(`${response.status}`)
    }
    return response.json()
  })
  .catch((error)=>{
    console.error('Network error', error)
  })
  
}

function fetchAndPopulatePokemons(selectElement) {
  // TODO complete this function
  const url = 'https://pokeapi.co/api/v2/pokemon'
  fetchData(url)
  .then((data)=>{
     data.results.forEach(pokemon => {
      const option = document.createElement('option')
      option.textContent = pokemon.name
      selectElement.appendChild(option)
    
     });
  })
}

function fetchImage(image, pokemonName) {
  // TODO complete this function
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  fetchData(url)
  .then((data)=>{
    const imageUrl = data.sprites.front_default
    image.src = imageUrl
  })
}

function main() {
  // TODO complete this function
  const selectElement = document.createElement('select');
  selectElement.id = 'pokemon-select';

  const image = document.createElement('img');
  image.id = 'pokemon-image';

  document.body.appendChild(selectElement);
  document.body.appendChild(image);

  selectElement.addEventListener('change', function(){
    const selectedPokemon = selectElement.value;
    fetchImage(image, selectedPokemon)
  })
  fetchAndPopulatePokemons(selectElement);

}
window.addEventListener('load', main);

