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
function catWalk() {
  // Select cat img element
  const catImage = document.querySelector('img');
  // Save current src
  const primaryImageSource = catImage.src;
  // Define alternative src
  const secondaryImageSource =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
  // Walking speed
  const stepSize = 10;
  // Steps interval
  const walkInterval = 50;
  // Dancing timeout
  const imageSwitchDelay = 5000;
  // Img left position tracker
  let currentPosition = 0;
  catImage.style.left = `${currentPosition}px`;
  // Calculate center of screen, base on img width, screen width and current location
  const maxWidth = window.innerWidth;
  // Returns true if img is close to center with 10px
  const isScreenCenter = () =>
    Math.abs(currentPosition - (maxWidth - catImage.width) / 2) < 10;
  // Reset img left position to 0
  const resetPosition = () => {
    currentPosition = 0;
  };
  // Toggle between SRCs
  const setCatImage = (src) => (catImage.src = src);

  const startWalking = () => {
    const intervalId = setInterval(() => {
      // Rest position to left side, if img pass the screen's max-width
      if (currentPosition > maxWidth) {
        resetPosition();
      }

      if (isScreenCenter()) {
        clearInterval(intervalId);
        setCatImage(secondaryImageSource);
        // Waiting for her to finish the party
        setTimeout(() => {
          setCatImage(primaryImageSource);
          currentPosition += stepSize;
          startWalking();
        }, imageSwitchDelay);
      }
      // Handle walking to/from center of screen
      currentPosition += stepSize;
      catImage.style.left = `${currentPosition}px`;
    }, walkInterval)
  };

  startWalking();
}

window.onload = catWalk;
