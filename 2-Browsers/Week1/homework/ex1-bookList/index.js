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
  
    
    const ulElement = document.createElement('ul');
   
    books.forEach(book =>{
      const pElement = document.createElement('p');
      pElement.textContent = `${book.title} by ${book.author}`;
     
      const liElement = document.createElement('li');
      liElement.appendChild(pElement)
      
      const imgElement = document.createElement('img');
      imgElement.src = book.coverUrl;
      liElement.appendChild(imgElement);
  
      // Change the style of the book
      if(book.alreadyRead){
        liElement.style.backgroundColor = 'green';
      }else{
        liElement.style.backgroundColor = 'red';
      }
      ulElement.appendChild(liElement);
    });
    return ulElement;
    
  }
  

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      coverUrl: 'https://www.bookmatch.nl/omslag/9780465050659-The-Design-of-Everyday-Things_large_nw.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400.jpg', 
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      coverUrl: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg', 
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
