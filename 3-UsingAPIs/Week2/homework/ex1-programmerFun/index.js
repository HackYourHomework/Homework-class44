'use strict';

function requestData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`Network error: ${error.message}`);
    });
}

function renderImage(data) {
  const img = document.createElement('img');
  img.src = data.img;
  img.alt = 'meme';
  document.body.appendChild(img);
}

function renderError(error) {
  const h1 = document.createElement('h1');
  h1.textContent = `Error: ${error.message}`;
  document.body.appendChild(h1);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
