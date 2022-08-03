import Bookshelf from './books.js';

const myBookshelf = new Bookshelf();

myBookshelf.LoadBooksFromLocal();

const render = () => {
  document.querySelector('.awesomeList').innerHTML = '';
  myBookshelf.Books.forEach((books) => {
    const List = document.querySelector('.awesomeList');
    const element = document.createElement('div');
    element.classList.add('eachBook');
    element.innerText = `${books.title} by ${books.author}`;
    List.appendChild(element);

    function deleteBook(event) {
      const deleteButton = event.target;
      const idToDelete = deleteButton.id;
      myBookshelf.DeleteBook(idToDelete);
      myBookshelf.SaveBookshelfLocal();
      render();
    }

    // Remove Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove';
    deleteButton.classList.add('delButton');
    deleteButton.onclick = deleteBook;
    deleteButton.id = books.id;
    element.appendChild(deleteButton);
  });
};

// Controller
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  const titletextbox = document.getElementById('title');
  const authortextbox = document.getElementById('author');
  const title = titletextbox.value;
  const author = authortextbox.value;
  myBookshelf.AddBook(title, author);
  myBookshelf.SaveBookshelfLocal();
  render();
});

var dt = new Date();
document.getElementById('date-time').innerHTML=dt;



const book = document.getElementById('book');
const list = document.getElementById('list');
const contact = document.getElementById('contact');



book.addEventListener('click', () => {
document.querySelector('.awesomeList').style.display = 'none';
document.querySelector('.newBook').style.display = 'flex';
document.querySelector('.contact').style.display = 'none';
});

render();