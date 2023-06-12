'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
'use strict';
function addCurrentTime() {
  const timeElement = document.createElement('div');
  timeElement.style.fontSize = '30px';
  timeElement.style.textAlign = 'center';
  timeElement.style.color = 'red';
  const updateTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0'); 
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
timeElement.textContent = `Current Time: ${formattedTime}`;
console.log(`Current Time: ${formattedTime}`);
 };
 updateTime();
 setInterval(updateTime, 1000);
document.body.appendChild(timeElement);
}
window.addEventListener('load', addCurrentTime);