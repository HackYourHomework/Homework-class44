'use strict';

function addCurrentTime() {
  const currentDate = new Date();

  let currentHours = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();

  currentHours = addLeadingZero(currentHours);
  currentMinutes = addLeadingZero(currentMinutes);
  currentSeconds = addLeadingZero(currentSeconds);

  function addLeadingZero(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  }
  const time = currentHours + ':' + currentMinutes + ':' + currentSeconds;
  const body = document.querySelector('body');
  let text = document.querySelector('p');
  if (text) {
    text.textContent = time;
  } else {
    text = document.createElement('p');
    text.textContent = time;
    body.appendChild(text);
  }
  console.log(time);
}

window.addEventListener('load', () => {
  setInterval(() => {
    addCurrentTime();
  }, 1000);
});
