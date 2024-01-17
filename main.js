const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    status: "not read",
  },
  {
    title: "When the Moon Hatched",
    author: "Sarah A. Parker",
    status: "read",
  },
  {
    title: "The Book of Bill",
    author: "Alex Hirsch",
    status: "Not read",
  },
];

// function Book(title, author, status) {
//   this.title = title;
//   this.author = author;
//   this.status = status;
// }

// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
// };

function addBookToLibrary(newBookObj) {
  myLibrary.push(newBookObj);
  displayBooks();
}

function displayBooks() {
  const bookList = document.querySelector(".books");
  bookList.innerHTML = "";
  myLibrary.forEach((book, i) => {
    const htmlBook = `
        <li class ="books-item" index="${i}">
            <div>${book.title}</div>
            <div>${book.author}</div>
            <div>${book.status}</div>
            <div><button class="delete" index="${i}" onClick="deleteBook(${i})">Delete</button></div>
        </li>
    `;
    bookList.insertAdjacentHTML("beforeend", htmlBook);
  });
}

displayBooks();

const form = document.querySelector(".book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  // output as an object
  addBookToLibrary(Object.fromEntries(formData));
  // clear inputs
  form.reset();
});

function deleteBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}
