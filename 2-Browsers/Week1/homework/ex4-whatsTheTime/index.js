'use strict';

function addCurrentTime() {
  const currentDate = new Date();

  const currentTime = currentDate.toLocaleTimeString('nl-NL');

  const body = document.querySelector('body');
  let text = document.querySelector('p');
  if (text) {
    text.textContent = currentTime;
  } else {
    text = document.createElement('p');
    text.textContent = currentTime;
    body.appendChild(text);
  }
  console.log(currentTime);
}

window.addEventListener('load', () => {
  setInterval(() => {
    addCurrentTime();
  }, 1000);
});
