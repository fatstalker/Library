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
    removeBook();
    clearForm();
}

function removeBook() {

}


function populateShelfs(book) {
    let bookDiv = document.createElement("div");
    let bookTitle = document.createTextNode('Title: ' + book.title);
    let titleDiv = document.createElement('div'); titleDiv.appendChild(bookTitle);
    let bookAuthor = document.createTextNode('Author: ' + book.author);
    let authorDiv = document.createElement('div'); authorDiv.appendChild(bookAuthor);
    let bookPages = document.createTextNode('Pages: ' + book.pages);
    let pagesDiv = document.createElement('div'); pagesDiv.appendChild(bookPages);
    //manage 'true' and 'false' into => 'read' and 'not read'
    let isBookRead = document.createTextNode(book.isRead);
    if (isBookRead.textContent === 'true') {
        isBookRead.textContent = 'Read'
    }
    else if (isBookRead.textContent === 'false') {
        isBookRead.textContent = 'Not read yet'
    };
    //------------------------------------------------------
    bookDiv.appendChild(titleDiv);bookDiv.appendChild(authorDiv);bookDiv.appendChild(pagesDiv);bookDiv.appendChild(isBookRead);
    shelfs.appendChild(bookDiv);
    let removeButton = document.createElement('button');removeButton.classList.add('removeButton');
    let removeButtonText = document.createTextNode('Remove book');
    removeButton.appendChild(removeButtonText);
    bookDiv.appendChild(removeButton);
    removeButton.addEventListener('click', () => bookDiv.remove())
    bookDiv.classList.add('bookCover')
    createReadSwitch(bookDiv, isBookRead);
}

function clearForm () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '0';
    document.querySelector('#isRead').value = true;
}

function createReadSwitch(bookDiv, isBookRead) {
    let readSwitch = document.createElement('button');
    let readSwitchText = document.createTextNode('Change read status');
    readSwitch.appendChild(readSwitchText);
    readSwitch.addEventListener('click', () => {
        if(isBookRead.textContent == 'Read') {
            isBookRead.textContent = 'Not read yet'
        }
        else if (isBookRead.textContent == 'Not read yet') {
            isBookRead.textContent = 'Read'
        }
    })
    bookDiv.appendChild(readSwitch);
}


let addBook = document.querySelector('#submitButton');
addBook.addEventListener('click', addBookToLibrary);
let shelfs = document.querySelector('.leftSide');
