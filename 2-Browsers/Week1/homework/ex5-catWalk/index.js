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
// Select the first <img> element in the document
const image = document.querySelector('img');
// Set the initial left position of the image to 0 pixels
image.style.left = '0px';
// Set an interval to call the catWalk function every 50 milliseconds
let interval = setInterval(catWalk, 50);

// Function to move the cat
function catWalk() {
  // Get the current left position of the image and parse it as an integer
  const leftPosition = parseInt(image.style.left);
  // Move the cat 10 pixels to the right by updating the left position
  image.style.left = leftPosition + 10 + 'px';
  // Calculate the middle position based on the window width, the cat's width and closest position of the cat, based on animation step in pixels
  const middlePosition =
    Math.floor((window.innerWidth / 2 - image.clientWidth / 2) / 10) * 10;

  // Check if the cat has reached the middle position
  if (leftPosition === middlePosition) {
    // Clear the interval to pause the cat's movement temporarily
    clearInterval(interval);
    // Change the image source to a dancing cat GIF
    image.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    // After 5 seconds, change the image source back to the walking cat GIF
    setTimeout(() => {
      image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      interval = setInterval(catWalk, 50);
    }, 5000);
  } else if (
    // Check if the cat has reached the right side of the screen
    leftPosition >=
    Math.floor((window.innerWidth - image.width) / 10) * 10
  ) {
    // Reset the left position of the cat to the beginning (left side) of the screen
    image.style.left = 0 + 'px';
  }
}

//call the function, when the entire page has loaded.
window.onload = catWalk;
