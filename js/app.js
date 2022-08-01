
//Model Section
let books;

//Retrieve localStorage
const savedBooks = JSON.parse(localStorage.getItem ('books'));

if (Array.isArray(savedBooks)){
books = savedBooks;
}else{
  books  = [{
    title:'Das' , 
    author:'Doy',
    id: '1'
  }];
}

render();

let list = document.querySelector('.awesomeList');

    //Save a Book
function createBooks(title, author) {
  const id = '' + new Date().getTime();

  books.push({
    title: title,
    author: author,
    id: id
  });

  saveBooks();
}

     //Deletes a Book
function removeBooks(idToDelete){
  books = books.filter(function (books){
    if (books.id !== idToDelete){
      return true;
    }else{
      return false;
    }
  });

  saveBooks();
}

function saveBooks(){
  localStorage.setItem('books', JSON.stringify(books));
}

//Controller
function addBook () {
  let titletextbox =document.getElementById('title');
  let authortextbox = document.getElementById('author');
  let title = titletextbox.value;
  let author = authortextbox.value;  

  createBooks(title, author);
  render();
}

function deleteBook (event){
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;  
  removeBooks(idToDelete);
  render();
}

//View
function render(){
  document.querySelector('.awesomeList').innerHTML = '';
  books.forEach(function(books) {    
    let List = document.querySelector('.awesomeList');
    let element = document.createElement('div');
    element.innerText = books.title +  '\n'  + books.author + '\n';

    //Remove Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText =  'Remove'; 
    deleteButton.onclick = deleteBook;    
    deleteButton.id = books.id;
    
    List.appendChild(element);
    element.appendChild(deleteButton)
  });
}