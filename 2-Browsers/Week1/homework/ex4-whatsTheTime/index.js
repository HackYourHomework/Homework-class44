'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const p = document.createElement('p');
  document.body.appendChild(p);
  setInterval(() => {
    const currentTime = new Date();
    const updatedCurrentTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    p.textContent = `Current Time: ${updatedCurrentTime}`;
  }, 1000);
}

window.addEventListener('load', addCurrentTime);
