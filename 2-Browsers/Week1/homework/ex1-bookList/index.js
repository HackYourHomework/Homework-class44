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
  // Select bookList div element and create an nested ul
  const bookListContainer = document.getElementById('bookList');
  const bookList = document.createElement('ul');
  // Added books class
  bookList.classList.add('books');
  bookListContainer.appendChild(bookList);
  // Iterate for each book and create li, title and image for that
  books.forEach(({ title, author, alreadyRead }) => {
    const listItem = document.createElement('li');
    const bookTitle = document.createElement('p');
    bookTitle.textContent = `${title} by ${author}`;
    // Check and set background color green if already read or red for not yet read books
    alreadyRead
      ? (bookTitle.style.backgroundColor = 'green')
      : (bookTitle.style.backgroundColor = 'red');
    // Add book's title to li
    listItem.appendChild(bookTitle);
    // Create book's image and set attributes
    const bookImage = document.createElement('img');
    bookImage.setAttribute(
      'src',
      `./assets/${title.toLowerCase().replace(/ /g, '_')}.jpg`
    );
    bookImage.setAttribute('alt', `${title.toLowerCase().replace(/ /g, '_')}`);
    bookImage.setAttribute('title', `${title}`);
    // Add book's image to li
    listItem.appendChild(bookImage);
    // Add li tag to book list div
    bookList.appendChild(listItem);
  });
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: true,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: false,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: false,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
