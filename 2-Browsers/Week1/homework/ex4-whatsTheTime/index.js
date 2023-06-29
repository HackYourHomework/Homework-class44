'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

const time = document.createElement('h1');
function addCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  time.textContent = `${hours}:${minutes}:${seconds}`;
  time.style.fontSize = '100px';
  time.style.marginLeft = '40%';
  time.style.marginTop = '300px';
  document.body.appendChild(time);
}

setInterval(addCurrentTime, 1000);

window.onload(addCurrentTime);
window.addEventListener('DOMContentLoaded', addCurrentTime);
