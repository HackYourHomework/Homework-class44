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
nickname.textContent = 'Valentyn Genkin';

const favFood = document.querySelector('li').nextElementSibling.children;
Array.from(favFood).forEach(element => element.textContent = 'Baked chicken');

const homeTown = document.querySelector('ul').children[2].children;
Array.from(homeTown).forEach(element => element.textContent = 'Rotterdam');

const li = document.querySelectorAll('li');
Array.from(li).forEach(className => className.className = 'list-item');