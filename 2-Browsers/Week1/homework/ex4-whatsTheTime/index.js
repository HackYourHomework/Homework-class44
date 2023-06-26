'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const now = new Date();
  const hours =
    now.getHours() > 9 || now.getHours().toString() === 0
      ? now.getHours()
      : '0' + now.getHours();
  const minutes =
    now.getMinutes() > 9 || now.getMinutes().toString() === 0
      ? now.getMinutes()
      : '0' + now.getMinutes();
  const seconds =
    now.getSeconds() > 9 || now.getSeconds().toString() === 0
      ? now.getSeconds()
      : '0' + now.getSeconds();

  document.getElementById(
    'time'
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
const timeInterval = () => {
  setInterval(addCurrentTime, 1000);
};
window.addEventListener('load', timeInterval);

// TODO execute `addCurrentTime` when the browser has completed loading the page
