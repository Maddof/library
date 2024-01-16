function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
const starwars = new Book("Star Wars", "Majd Azar", 201, "read");

console.log(theHobbit.info());
console.log(starwars.info());
console.log(starwars);
