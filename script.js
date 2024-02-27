const myLibrary = [];

let addBook = document.querySelector('#submitButton');  addBook.addEventListener('click', addBookToLibrary);
let shelfs = document.querySelector('.leftSide');


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}   //constructor


function addBookToLibrary() {
    event.preventDefault();
    pushFormDataToArray();
    populateShelfs(myLibrary[myLibrary.length - 1]);
    clearForm();
}

    function pushFormDataToArray() {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let isRead = document.querySelector('#isRead').value;
        myLibrary.push(new Book (title, author, pages, isRead));
    };

    function populateShelfs(book) {
        let bookDiv = document.createElement("div");    bookDiv.classList.add('bookCover');
        let titleDiv = document.createElement('div');   let bookTitle = document.createTextNode(book.title);  titleDiv.appendChild(bookTitle); titleDiv.classList.add('title');
        let authorDiv = document.createElement('div');  let bookAuthor = document.createTextNode('Author: ' + book.author);  authorDiv.appendChild(bookAuthor);authorDiv.classList.add('author');
        let pagesDiv = document.createElement('div');   let bookPages = document.createTextNode('Pages: ' + book.pages);  pagesDiv.appendChild(bookPages);pagesDiv.classList.add('pages');
        let isReadDiv = document.createElement('div');  let bookIsRead = document.createTextNode('Read: '); isReadDiv.appendChild(bookIsRead);  isReadDiv.classList.add('isReadDiv');
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(pagesDiv);
        bookDiv.appendChild(isReadDiv);
        let svgPlaceholder = document.createElement('div'); isReadDiv.appendChild(svgPlaceholder);

        determineSvg(book.isRead, svgPlaceholder);
        shelfs.appendChild(bookDiv);
        removeBook(bookDiv);
        createReadSwitch(bookDiv, book.isRead, isReadDiv, svgPlaceholder);
        applyRandomColor(bookDiv, possibleSelections);
    };

        function determineSvg(isReadValue, svgPlaceholder) {
            let yesSvg = document.createElement('img'); yesSvg.src = 'yes.svg';
            let noSvg = document.createElement('img'); noSvg.src = 'no.svg';
            
            if (isReadValue == 'true') {
                svgPlaceholder.appendChild(yesSvg);
                return isReadValue = 'true';
            }
            else if (isReadValue == 'false') {
                svgPlaceholder.appendChild(noSvg)
                return isReadValue = 'false';
            };
        };

        function removeBook(bookDiv) {
            let removeButton = document.createElement('button');
            let removeButtonText = document.createTextNode('Remove book');removeButton.appendChild(removeButtonText);
            removeButton.classList.add('removeButton');
            bookDiv.appendChild(removeButton);
            removeButton.addEventListener('click', () => bookDiv.remove())
        };

        function createReadSwitch(bookDiv, isReadValue, svgPlaceholder) {
            let yesSvg = document.createElement('img'); yesSvg.src = 'yes.svg';
            let noSvg = document.createElement('img'); noSvg.src = 'no.svg';
            let readSwitch = document.createElement('button');readSwitch.classList.add('readStatus');
            let readSwitchText = document.createTextNode('Change read status');readSwitch.appendChild(readSwitchText);
            bookDiv.appendChild(readSwitch);
            
            readSwitch.addEventListener('click', () => {
                if(isReadValue == 'true') {
                    svgPlaceholder.removeChild(svgPlaceholder.firstElementChild);
                    svgPlaceholder.appendChild(noSvg);
                    return isReadValue = 'false';
                }
                else if (isReadValue == 'false') {
                    svgPlaceholder.removeChild(svgPlaceholder.firstElementChild);
                    svgPlaceholder.appendChild(yesSvg);
                    return isReadValue = 'true';
                }
            })
        };
    function clearForm () {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '0';
        document.querySelector('#isRead').value = true;
    };





//target default books

let khaledDiv = document.querySelector('#khaled');
let ferranteDiv = document.querySelector('#ferrante');
//--------------------

//remove functions for default books
let removeKhaled = document.querySelector('#removeKhaled');
let removeFerrante = document.querySelector('#removeFerrante');
removeKhaled.addEventListener('click', () => {khaledDiv.remove()});
removeFerrante.addEventListener('click', () => {ferranteDiv.remove()});
//-----------------------------

//change read status for default books
let switchKhaled = document.querySelector('#switchKhaled');
let khaledReadStatus = false;
let khaledSvgPlaceholder = document.querySelector('#khaledSvgPlaceholder');
let switchFerrante = document.querySelector('#switchFerrante');
let ferranteReadStatus = true;

switchKhaled.addEventListener('click', () => {
    let yesSvg = document.createElement('img'); yesSvg.src = 'yes.svg';
    let noSvg = document.createElement('img'); noSvg.src = 'no.svg';
    if(khaledReadStatus) {
        khaledSvgPlaceholder.removeChild(khaledSvgPlaceholder.firstElementChild);
        khaledSvgPlaceholder.appendChild(noSvg);
        khaledReadStatus = false;
    }
    else {
        khaledSvgPlaceholder.removeChild(khaledSvgPlaceholder.firstElementChild);
        khaledSvgPlaceholder.appendChild(yesSvg);
        khaledReadStatus = true;
    }
})

switchFerrante.addEventListener('click', () => {
    let yesSvg = document.createElement('img'); yesSvg.src = 'yes.svg';
    let noSvg = document.createElement('img'); noSvg.src = 'no.svg';
    if(ferranteReadStatus) {
        ferranteSvgPlaceholder.removeChild(ferranteSvgPlaceholder.firstElementChild);
        ferranteSvgPlaceholder.appendChild(noSvg);
        ferranteReadStatus = false;
    }
    else {
        ferranteSvgPlaceholder.removeChild(ferranteSvgPlaceholder.firstElementChild);
        ferranteSvgPlaceholder.appendChild(yesSvg);
        ferranteReadStatus = true;
    }
})
//-----------------------------

//random color generator
let possibleSelections = ["red", "blue", "green", "brown"];
function applyRandomColor(bookDiv, possibleSelections) {
    let randomColor = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
    bookDiv.classList.add(randomColor);
}
//----------------------