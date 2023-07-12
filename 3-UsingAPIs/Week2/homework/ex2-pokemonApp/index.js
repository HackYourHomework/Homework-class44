'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchAndPopulatePokemons(url) {
  const selectElement = document.querySelector('select');

  try {
    const data = await fetchData(url);

    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.url;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchImage(url) {
  const imgElement = document.querySelector('img');

  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
  } catch (error) {
    console.error('Error:', error);
  }
}

function main() {
  const selectElement = document.querySelector('select');

  selectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    if (selectedOption) {
      fetchImage(selectedOption);
    }
  });

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  fetchAndPopulatePokemons(url);
}

window.addEventListener('load', main);
