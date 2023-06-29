'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

//  replace each of the spans (`nickname`, fav-food`, hometown
const changeTextContent = (id, text) => {
  const elementToChange = document.getElementById(id);
  elementToChange.textContent = text;
};
// Update nickname
changeTextContent('nickname', 'Robert');

// Update fav-food
changeTextContent('fav-food', 'Pizza');

// Update hometown
changeTextContent('hometown', 'Utrecht');

// 
const listItems = document.querySelectorAll('li');
listItems.forEach(li => {
  li.classList.add('list-item');
});
