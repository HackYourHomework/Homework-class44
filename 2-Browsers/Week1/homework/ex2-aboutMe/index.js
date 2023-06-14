'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.querySelector('#nickname');
const favFood = document.querySelector('#fav-food');
const hometown = document.querySelector('#hometown');
const liElements = document.querySelectorAll('li');

nickname.textContent = 'Mike';
favFood.textContent = 'Duck with sweet and sour souce';
hometown.textContent = 'Tehran';

liElements.forEach((li) => {
  li.classList.add('list-item');
});
