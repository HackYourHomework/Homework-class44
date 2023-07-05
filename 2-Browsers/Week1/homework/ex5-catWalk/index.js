'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

// variable to store img element
const imgElement = document.querySelector('img');
imgElement.style.left = '0px';
// maximum screen position
const fullScreen = window.innerWidth;
const middlePosition = fullScreen / 2;// divide it by half

let Dancing = false;


function catWalk() {
  // function  to move the cat 10 pixels to the right
  const currentPosition = parseInt(imgElement.style.left);//parseInt to pass in the string value as assigned decimal value..google source
  const newPosition = currentPosition + 10;
  // Move the cat to the right by updating the left position
  imgElement.style.left = `${newPosition}px`;
  
  // this returns the cat to the begining
  if (newPosition === fullScreen) {
    imgElement.style.left = '0px';
  }
  if (newPosition === middlePosition && !Dancing) {
    // If the cat reaches the middle of the screen and is not already dancing
    imgElement.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    Dancing = true;
    // After 5 seconds, replace the image with the original one and allow the cat to continue walking
    setTimeout(() => {
    imgElement.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'; 
    Dancing = false;
    }, 5000);
  } 
    
}
// the interval to call the catWalk fuction every 50 mil
setInterval(catWalk, 50);
