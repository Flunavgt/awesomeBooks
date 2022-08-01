
let books=["hello", "test"];
let list = document.querySelector('.awesomeList')


books.forEach(function(addToLib) {
  let element = document.createElement('div')
  element.innerText = addToLib;
  document.body.appendChild(element);
});

function addBook () {
  let titletextbox =document.getElementById('title');
  let authortextbox = document.getElementById('author');
  let  title = titletextbox.value;
  console.log(books);
}