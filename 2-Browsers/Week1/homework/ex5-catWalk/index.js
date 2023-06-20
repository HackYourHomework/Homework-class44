


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
