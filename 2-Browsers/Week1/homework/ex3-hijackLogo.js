'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // Select all img element(s) in the page
  const images = document.querySelectorAll('img');
  // Iterate through all images
  images.forEach((image) => {
    // Distinguish logo between all selected images
    if (
      // image source must have 'googleLogo' in its source address
      image.src.match(/googlelogo/i) ||
      // image alt is 'google' or 'Google'
      image.alt.match(/google/i) ||
      // it have a class named 'lnXdpd'
      image.classList.contains('lnXdpd')
    ) {
      // Apply HYF's logo
      image.src = `https://www.hackyourfuture.dk/static/logo-dark.svg`;
      image.srcset = `https://www.hackyourfuture.dk/static/logo-dark.svg`;
      image.alt = `Search Your Future`;
    }
  });
}

hijackGoogleLogo();
