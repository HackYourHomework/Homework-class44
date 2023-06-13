'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
`hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
`list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

'use strict';

// Replace spans with your own information
document.getElementById('nickname').textContent = 'El-dia';
document.getElementById('fav-food').textContent = 'Rice';
document.getElementById('hometown').textContent = 'Daryya';

// Change class to 'list-item' for each <li> element
const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  item.classList.add('list-item');
});
