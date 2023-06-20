'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const currentTimeDiv = document.createElement('div');
document.body.appendChild(currentTimeDiv);

function addCurrentTime() {
  // TODO complete this function
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  currentTimeDiv.textContent = time;
  console.log(time);

}

// TODO execute `addCurrentTime` when the browser has completed loading the page

window.addEventListener('load', addCurrentTime);
setInterval(addCurrentTime, 1000);


//: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString link from Tim 