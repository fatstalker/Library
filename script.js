const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}   //constructor


function addBookToLibrary() {
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let isRead = document.querySelector('#isRead').value;
    myLibrary.push(new Book (title, author, pages, isRead))
    populateShelfs(myLibrary[myLibrary.length - 1]);
    clearForm();
}

function populateShelfs(book) {
    let bookDiv = document.createElement("div");
    let bookTitle = document.createTextNode(book.title);
    let titleDiv = document.createElement('div'); titleDiv.appendChild(bookTitle);
    let bookAuthor = document.createTextNode(book.author);
    let authorDiv = document.createElement('div'); authorDiv.appendChild(bookAuthor);
    let bookPages = document.createTextNode(book.pages);
    let pagesDiv = document.createElement('div'); pagesDiv.appendChild(bookPages);
    //manage 'true' and 'false' into => 'read' and 'not read'
    let isBookRead = document.createTextNode(book.isRead);
    if (isBookRead.textContent === 'true') {
        isBookRead.textContent = 'Read'
    }
    else if (isBookRead.textContent === 'false') {
        isBookRead.textContent = 'Not read yet'
    };
    bookDiv.appendChild(isBookRead);
    //------------------------------------------------------
    bookDiv.appendChild(titleDiv, authorDiv, pagesDiv)
    shelfs.appendChild(bookDiv);
    bookDiv.classList.add('bookCover')
}

function clearForm () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isRead').value = '';
    document.querySelector('#isRead').value = false;
}

let addBook = document.querySelector('#submitButton');
addBook.addEventListener('click', addBookToLibrary);
let shelfs = document.querySelector('.leftSide');

