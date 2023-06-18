'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
// Keep track of the interval
let intervalId = 0;

function addCurrentTime() {
  // Created a p element and added to the body for showing time
  const timeElement = document.createElement('p');
  document.body.appendChild(timeElement);
  // Set 1sec interval for refresh the time in DOM
  intervalId = setInterval(() => {
    // Get current Date with HH:MM:SS format
    const currentTime = new Date().toLocaleTimeString('nl-NL');
    // Set p element's content with current time
    timeElement.textContent = currentTime;
    // Log current time to console
    console.log(timeElement.textContent)
  }, 1000);
}

// Execute `addCurrentTime` when the browser has completed loading the page
window.onload = addCurrentTime;
// Clear interval from memory when the browser unload the page
window.onunload = clearInterval(intervalId);
