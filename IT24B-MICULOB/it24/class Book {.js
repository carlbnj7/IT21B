class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.isAvailable = true;
    }
  
    borrow() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is not available.`);
      }
    }
  
    returnBook() {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`${book.title} by ${book.author} added to the library.`);
    }
  
    findBook(title) {
      return this.books.find(book => book.title === title);
    }
  
    lendBook(title) {
      const book = this.findBook(title);
      if (book) {
        book.borrow();
      } else {
        console.log(`Book titled "${title}" not found.`);
      }
    }
  
    receiveBook(title) {
      const book = this.findBook(title);
      if (book) {
        book.returnBook();
      } else {
        console.log(`Book titled "${title}" not found.`);
      }
    }
  }
  
  // Creating objects
  const myLibrary = new Library();
  const book1 = new Book('JavaScript Basics', 'John Doe');
  const book2 = new Book('Advanced JavaScript', 'Jane Smith');
  
  // Using methods
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  myLibrary.lendBook('JavaScript Basics');
  myLibrary.receiveBook('JavaScript Basics');