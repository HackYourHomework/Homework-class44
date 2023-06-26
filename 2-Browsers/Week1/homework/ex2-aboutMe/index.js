'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const myInfos = {
  nickname: 'Hasan',
  favfood: 'doner',
  hometown: 'Afyonkarahisar',
};
document.getElementById('nickname').textContent = myInfos.nickname;
document.getElementById('fav-food').textContent = myInfos.favfood;
document.getElementById('hometown').textContent = myInfos.hometown;

const liElementArr = document.getElementsByTagName('li');
for (const liElement of liElementArr) {
  liElement.classList.add('list-item');
}
