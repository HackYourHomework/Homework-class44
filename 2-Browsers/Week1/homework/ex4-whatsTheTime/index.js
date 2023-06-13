'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  div.style.cssText = `
    height: 100vh; 
    font-size: 40px; 
    display: flex; 
    justify-content: center; 
    align-items: center`;

  function currentTimeUpdate (){
    const date = new Date().toLocaleTimeString('en-GB');
    div.textContent = `Current time: ${date}`;
    console.log(div.textContent)
  }

  setInterval(currentTimeUpdate, 1000)
}

window.addEventListener('load', addCurrentTime);
