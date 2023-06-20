// 'use strict';
// /*------------------------------------------------------------------------------
// Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

// 1. Create a variable to store a reference to the `<img>` element.
// 2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
//    at the left hand of the screen.
// 3. Complete the function called catWalk() to move the cat 10 pixels to the right
//    of where it started, by changing the `left` style property.
// 4. Call that function every 50 milliseconds. Your cat should now be moving 
//    across the screen from left to right. Hurrah!
// 5. When the cat reaches the right-hand of the screen, restart them at the left 
//    hand side (`0px`). So they should keep walking from left to right across the 
//    screen, forever and ever.
// 6. When the cat reaches the middle of the screen, replace the img with an image 
//    of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
//    and then replace the img with the original image and have it 
//    continue the walk.

//    Dancing cat URL:

//    https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
// -----------------------------------------------------------------------------*/


//to select the first <img> element in the document by creating variable for it
const image = document.querySelector('img');
//style the <img> by setting left position to `0px`
image.style.left = 0;
//set a variable to check the current position of the cat
let catMove = 0;
//set a variable to be used to store the interval of the the cat movements
let catInterval;

function catWalk() {
  if (catMove < window.innerWidth) {
    catMove += 10;
  } else {
    catMove = 0;
  }
//Move the cat 10 pixels to the right by updating the left position
  image.style.left = `${catMove}px`;
  
   // Check if the cat has reached the middle position as tim advised -- instead of guessing to use innerWidth we need to check if catMove >= window.innerWidth / 2 to ensure the cat starts dancing when it reaches or passes the middle position and it finally happily dancing :)
  
   if (catMove >= window.innerWidth / 2 ) {
    // Change the image source to a dancing cat GIF
    image.src =
       'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

     // Clear the interval to pause the cat's movement temporarily
      clearInterval(catInterval);

      // After 5 seconds, change the image source back to the walking cat GIF
    setTimeout(() => {
      image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      catInterval = setInterval(catWalk, 50);
    }, 5000);
  }
}

// TODO execute `catWalk` when the browser has completed loading the page

//call the function, when the entire page has loaded.
catInterval = setInterval(catWalk, 50);
