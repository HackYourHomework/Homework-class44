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
  const parseData = await response.json();
  const dataArray = parseData.results;
  return dataArray;
  } catch(error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(data) {
  const pokemonList = document.getElementById("selectPokemon");
  data.forEach(element => {
    const optionPokemon = document.createElement("option");
    optionPokemon.textContent = element.name;
    pokemonList.appendChild(optionPokemon);
  });
}

async function fetchImage(selectedElement) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.textContent = "";

      const imageData = await fetch(selectedElement.url);
      const imageParse = await imageData.json();
      const imageLink = imageParse.sprites.front_default;
      const img = document.createElement("img");
      img.style.width = "250px";
      img.src = imageLink;
      imageContainer.appendChild(img);
  }
  



window.onload = async function main() {
  try{
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  await fetchAndPopulatePokemons(data);
  const pokemonList = document.querySelector("#selectPokemon");
  pokemonList.addEventListener("change", function(){
  const selectedPokemon = pokemonList.value;
  const selectedElement = data.find(element => element.name === selectedPokemon);
  fetchImage(selectedElement);
  });
  } catch (error) {
    console.log(error);
  }
}
