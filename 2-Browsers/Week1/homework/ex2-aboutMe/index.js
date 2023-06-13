'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nicknameElement = document.getElementById('nickname');
nicknameElement.textContent = 'Ahmet';

const favFoodElement = document.getElementById('fav-food');
favFoodElement.textContent = 'Pizza';

const hometownElement = document.getElementById('hometown');
hometownElement.textContent = 'Istanbul';

const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  item.classList.add('list-item');
});
