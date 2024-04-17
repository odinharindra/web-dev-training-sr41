# A realworld scenario to understand the classes

Let's consider a real-world problem and solution that can be modeled using a JavaScript class. We'll create a `Library` class that models a simple library system. This class will allow you to manage a collection of books in a library, including adding new books, searching for books by title or author, and checking books in and out.

### Problem

You want to create a library system to manage a collection of books. The system should allow you to:

- Add new books to the library.
- Search for books by title or author.
- Check out and return books.
- Keep track of which books are checked out and by whom.

### Solution

To solve this problem, we will create a `Library` class with the following features:

- A constructor to initialize the library with an empty collection of books and a record of checked-out books.
- A method to add new books to the library.
- A method to search for books by title or author.
- A method to check out a book to a user and keep track of the checked-out books.
- A method to return a book that was previously checked out.

Here's how we might implement the `Library` class:

```javascript
class Library {
  constructor() {
    this.books = []; // An array to hold the books in the library
    this.checkedOutBooks = new Map(); // A map to track checked-out books
  }

  // Method to add a new book to the library
  addBook(title, author) {
    const book = { title, author, available: true };
    this.books.push(book);
    console.log(`Added book: ${title} by ${author}`);
  }

  // Method to search for books by title or author
  searchBooks(query) {
    const results = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    return results;
  }

  // Method to check out a book to a user
  checkOutBook(title, user) {
    const book = this.books.find((b) => b.title === title && b.available);
    if (book) {
      book.available = false;
      this.checkedOutBooks.set(book, user);
      console.log(`Book "${title}" checked out to ${user}.`);
    } else {
      console.log(`Book "${title}" is not available.`);
    }
  }

  // Method to return a book that was checked out
  returnBook(title) {
    const book = this.books.find((b) => b.title === title && !b.available);
    if (book) {
      book.available = true;
      this.checkedOutBooks.delete(book);
      console.log(`Book "${title}" has been returned.`);
    } else {
      console.log(`Book "${title}" is not currently checked out.`);
    }
  }
}

// Example usage of the Library class
const myLibrary = new Library();

// Adding books to the library
myLibrary.addBook("The Catcher in the Rye", "J.D. Salinger");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee");
myLibrary.addBook("1984", "George Orwell");

// Searching for books
const searchResults = myLibrary.searchBooks("Harper Lee");
console.log("Search results:", searchResults);

// Checking out a book
myLibrary.checkOutBook("1984", "Alice");

// Returning a book
myLibrary.returnBook("1984");
```

In this example, the `Library` class provides methods to manage the collection of books and track their availability. You can add new books, search for books by title or author, check out books to users, and return books that were previously checked out.
