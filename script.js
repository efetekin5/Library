let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}


function addBookToLibrary() {
  let formTitle = document.querySelector("#title");
  let formAuthor = document.querySelector("#author");
  let formPageNumber = document.querySelector("#pageNumber");
  let formRead = document.querySelector("#read");

  let newBook = new Book(
    formTitle.value,
    formAuthor.value,
    formPageNumber.value,
    formRead.value
  );
  myLibrary.push(newBook);

  formTitle.value = "";
  formAuthor.value = "";
  formPageNumber.value = "";
  formRead.value = "";

  displayBook();
}

function displayBook() {
  let booksDiv = document.querySelector(".books");
  booksDiv.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.setAttribute("id", `${i}`);

    let titleDiv = document.createElement("div");
    titleDiv.textContent = `Title: ${book.title}`;

    let authorDiv = document.createElement("div");
    authorDiv.textContent = `Author: ${book.author}`;

    let pagesDiv = document.createElement("div");
    pagesDiv.textContent = `Page Number: ${book.pages}`;

    let readDiv = document.createElement("div");
    readDiv.textContent = `Read?: ${book.read}`;

    let removeDiv = document.createElement("div");
    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBook(`${i}`);
    });
    removeDiv.appendChild(removeButton);

    let editDiv = document.createElement("div");
    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
      if (book.read == 'yes') {
        book.read = 'no';
        displayBook();
      } else {
        book.read = 'yes';
        displayBook();
      }
    });
    editDiv.appendChild(editButton);

    bookCard.appendChild(titleDiv);
    bookCard.appendChild(authorDiv);
    bookCard.appendChild(pagesDiv);
    bookCard.appendChild(readDiv);
    bookCard.appendChild(removeDiv);
    bookCard.appendChild(editDiv);

    booksDiv.appendChild(bookCard);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

function formToggle() {
  let formDiv = document.querySelector(".formDiv");
  let openingButton = document.querySelector(".button");
  let x = document.querySelector(".x");

  openingButton.addEventListener("click", () => {
    formDiv.style.display = "block";
  });

  x.addEventListener("click", () => {
    formDiv.style.display = "none";
  });
}

function submitForm() {
  let submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    formDiv = document.querySelector(".formDiv");
    formDiv.style.display = "none";
  });
}

let HarryPotter = new Book("Harry Potter", "Efe Tekin", 351, "yes");
myLibrary.push(HarryPotter);
displayBook();
formToggle();
submitForm();