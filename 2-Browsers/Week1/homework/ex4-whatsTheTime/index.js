'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const time = document.querySelector('.time');
  // get current time
  const currentTime = new Date();
  // get the hours
  const hours = currentTime.getHours();
  // get the minutes
  const minutes = currentTime.getMinutes();
  // get the seconds
  const seconds = currentTime.getSeconds();
  // add the time to the webpage
  const timeDisplay = `${hours}:${minutes}:${seconds}`;
  time.textContent = timeDisplay;

}

addCurrentTime();
setInterval(addCurrentTime, 1000);
// when loading in the browser.
window.addEventListener('DOMContentLoaded', addCurrentTime);
