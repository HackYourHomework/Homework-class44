'use strict';

const nicknameSpan = document.getElementById('nickname');
nicknameSpan.textContent = 'Shou';

const favoriteFoodSpan = document.getElementById('fav-food');
favoriteFoodSpan.textContent = 'Fries';

const hometownSpan = document.getElementById('hometown');
hometownSpan.textContent = 'Algeria';

const lis = document.querySelectorAll('li');
lis.forEach((li) => {
  li.setAttribute('class', 'list-item');
});
