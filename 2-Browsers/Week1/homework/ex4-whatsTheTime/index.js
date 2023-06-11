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
  const formattedTime = now.toLocaleTimeString('nl-NL');
  // Create a new <p> element if it doesn't exist
  let time = document.getElementById('current-time');
  if (!time) {
    time = document.createElement('h2');
    time.id = 'current-time';
    document.body.appendChild(time);
  }

  // Update the time on the webpage
  time.textContent = formattedTime;

  // Log the current time to the console
  console.log(formattedTime);
}

window.addEventListener('load', () => {
  addCurrentTime();
  // Update the time every second (1000 milliseconds)
  setInterval(addCurrentTime, 1000);
});
