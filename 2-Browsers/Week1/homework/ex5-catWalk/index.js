'use strict';

let dancing = false;
function catWalk() {
  function roundToNearestTen(number) {
    return Math.floor(number / 10) * 10; // because the width of the screen is
  }
  const imgRef = document.querySelector('img');
  const screenWidth = window.innerWidth;
  const position = imgRef.style.left;
  const intPosition = parseInt(position, 10);

  if (!position) {
    imgRef.style.left = '0px';
  }
  if (intPosition === roundToNearestTen(screenWidth / 2 - 150)) {
    //Note : 150 = img width/2

    dancing = true;
    imgRef.src = 'https://c.tenor.com/lpHW7hkRD6MAAAAC/tenor.gif';
    setTimeout(() => {
      imgRef.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    }, 5000);
  }
  if (intPosition + 300 > screenWidth) {
    imgRef.style.left = '0px';
  } else {
    const newValue = intPosition + 10;
    imgRef.style.left = newValue + 'px';
  }
}

setInterval(() => {
  if (dancing) {
    setTimeout(() => {
      dancing = false;
    }, 5000);
  } else {
    catWalk();
  }
}, 50);
