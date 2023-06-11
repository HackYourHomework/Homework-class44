'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// Define the data object with key-value pairs
const data = {
  nickname: 'Audrey',
  'fav-food': 'fruits',
  hometown: 'Saint-Petersburg',
};
// Loop over each key in the data object
Object.keys(data).forEach((key) => {
  // Select the <span> element with the corresponding Id
  const spanElement = document.querySelector(`#${key}`);
  // Check if the <span> element exists
  if (spanElement) {
    // Update the text content of the <span> element with the corresponding value from the data object
    spanElement.textContent = data[key];
  }
});
// Loop over each <li> element
document.querySelectorAll('li').forEach((element) => {
  // Add the 'list-item' class to each <li> element
  element.classList.add('list-item');
});
