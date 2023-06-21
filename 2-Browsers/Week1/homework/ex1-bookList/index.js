function createBookList(books) {
  const ul = document.createElement('ul');
  for (let i = 0; i < books.length; i++) {
    const li = document.createElement('li');
    const header = document.createElement('p');
    const img = document.createElement('img');
    header.textContent = books[i].title + ' by ' + books[i].author;
    const src = books[i].title.toLowerCase().replace(/ /g, '_');
    img.src = './assets/' + src + '.jpg';
    if (books[i].alreadyRead) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
    img.alt = books[i].title;
    li.appendChild(header);
    li.appendChild(img);
    ul.appendChild(li);
  }
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      imgSrc: './assets/the_design_of_everyday_things.jpg',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
