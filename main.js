const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    status: "Not read",
  },
  {
    title: "When the Moon Hatched",
    author: "Sarah A. Parker",
    status: "Read",
  },
  {
    title: "The Book of Bill",
    author: "Alex Hirsch",
    status: "Not read",
  },
];

class Book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }

  static displayBooks() {
    const bookList = document.querySelector(".books");
    bookList.innerHTML = "";
    myLibrary.forEach((book, i) => {
      const htmlBook = `
          <li class ="books-item" index="${i}">
              <div>${book.title}</div>
              <div>${book.author}</div>
              <div><button class="status" onClick="Book.toggleStatus(${i})" value="${book.status}">${book.status}</button></div>
              <div><button class="delete" onClick="Book.deleteBook(${i})">Delete</button></div>
          </li>
      `;
      bookList.insertAdjacentHTML("beforeend", htmlBook);
    });
  }

  static addBookToLibrary(newBookObj) {
    console.log(newBookObj);
    myLibrary.push(newBookObj);
    this.displayBooks();
  }

  static toggleStatus(i) {
    if (myLibrary[i].status === "Read") {
      myLibrary[i].status = "Not read";
    } else {
      myLibrary[i].status = "Read";
    }
    this.displayBooks();
  }

  static deleteBook(i) {
    myLibrary.splice(i, 1);
    this.displayBooks();
  }
}

Book.displayBooks();

const form = document.querySelector(".book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Object constructor for form
  let formData = new FormData(form);
  // output as an object
  Book.addBookToLibrary(Object.fromEntries(formData));
  // clear inputs
  form.reset();
});
