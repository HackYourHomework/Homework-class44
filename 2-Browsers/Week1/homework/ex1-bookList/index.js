//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // Create the <ul> element
  const ul = document.createElement('ul');

  // Iterate through the array of books
  books.forEach((book) => {
    // Create the <li> element for each book
    const li = document.createElement('li');

    // Create the <p> element for book title and author
    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;

    // Create the <img> element for the book cover
    const img = document.createElement('img');
    img.src = `./assets/${book.title.toLowerCase().replace(/\s+/g, '_')}.jpg`;
    img.alt = book.title;

    // Set the style based on whether the book has been read or not
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    // Append the <p> and <img> elements to the <li> element
    li.appendChild(p);
    li.appendChild(img);

    // Append the <li> element to the <ul> element
    ul.appendChild(li);
  });

  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
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
