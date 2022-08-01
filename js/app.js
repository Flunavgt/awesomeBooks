// Model Section
let books;

// Retrieve localStorage
const savedBooks = JSON.parse(localStorage.getItem('books'));

if (Array.isArray(savedBooks)) {
  books = savedBooks;
} else {
  books = [{
    title: 'Das',
    author: 'Doy',
    id: '1',
  }];
}

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

// Save a Book
function createBooks(title, author) {
  const id = `${new Date().getTime()}`;

  books.push({
    title,
    author,
    id,
  });

  saveBooks();
}

// Deletes a Book
function removeBooks(idToDelete) {
  books = books.filter((books) => {
    if (books.id !== idToDelete) {
      return true;
    }
    return false;
  });

  saveBooks();
}

const render = () => {
  document.querySelector('.awesomeList').innerHTML = '';
  books.forEach((books) => {
    const List = document.querySelector('.awesomeList');
    const element = document.createElement('div');
    element.innerText = `${books.title}\n${books.author}\n`;

    function deleteBook(event) {
      const deleteButton = event.target;
      const idToDelete = deleteButton.id;
      removeBooks(idToDelete);
      render();
    }

    // Remove Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove';
    deleteButton.onclick = deleteBook;
    deleteButton.id = books.id;

    List.appendChild(element);
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

  createBooks(title, author);
  render();
});

render();