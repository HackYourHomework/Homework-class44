'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.getElementById('nickname');
nickname.textContent = 'Enes';
const favFood = document.getElementById('fav-food');
favFood.textContent = 'Kokorec';
const hometown = document.getElementById('hometown');
hometown.textContent = 'Izmir';

const listItem = document.querySelectorAll('li');
listItem.forEach((li) => {
  li.classList.add('list-item');
});
