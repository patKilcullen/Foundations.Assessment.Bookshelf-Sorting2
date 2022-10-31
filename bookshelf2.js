// Bookshelf: creates the Bookshelf class with numOfShelves construction that allows users
// add as many shelves as they want to their bookshelf, as well as a bookArray array
// which is how it will receive data from book-data.js
class Bookshelf {
    constructor(numOfShelves) {
      this.bookArray = [];
      this.numberOfShelves = numOfShelves;
      this.faveArray = [];
      this.searchArray = [];

    }
  
    // addBook: takes book arguemnt and adds it to Bookshelf class's bookArray
    addBook(book) {
      this.bookArray.push(book);
    }
  
    // stockShelves: uses map to made a new Book out of every object in a book array and then run it
    // through the Bookshelf class addBook method to add the bookshelf's bookArray
    stockShelves(bookArray) {
      bookArray.map((book) => {
        let newBook = new Book(
          book.author,
          book.title,
          book.language,
          book.subject,
          book.isFavorite
        );
        this.addBook(newBook);
      });
    }
  
  //   searchTitle(title) {
  //     return this.bookArray.filter((book) => book.title === title);
  //   }
  //   searchAuthor(name) {
  //     return this.bookArray.filter((book) =>
  //       book.author.find((string) => string.includes(name))
  //     );
  //   }
  //   searchSubject(subject) {
  //     return this.bookArray.filter((book) =>
  //       book.subject.find((string) =>
  //         string.toLowerCase().includes(subject.toLowerCase())
  //       )
  //     );
  //   }
  
  //   arrangeByAuthor() {
  //     // this.bookArray.sort((a,b)=>a.author[0].localeCompare(b.author))
  //     return this.bookArray.sort((a, b) => a.author[0].localeCompare(b.author));
  //   }
  
    // arrangeByTitle() {
    //   this.bookArray.sort((a, b) => a.title.localeCompare(b.title));
    //   // return this.bookArray.sort((a,b)=>a.title.localeCompare(b.title))
    // }
  
  // render: creates the main element of the bookshelf page and links them toe classnames to
  // be styled with CSS
    render() {
      const main = document.querySelector(".bookShelf");
      main.className = "main";
  
      const bookShelf = document.createElement("section");
      bookShelf.className = "bookShelf";
  
      const shelves = document.createElement("section");
      shelves.className = "shelves";
  
  // For loop uses numOfBooks constructor to let a user add as many shelves 
  // as they want to they bookshelf
      for (let i = 0; i < this.numberOfShelves; i++) {
        const shelfArray = [];
        shelfArray[i] = document.createElement("div");
        shelfArray[i].className = "shelfArray";
  
   // booksPerShelf: divides number of elements in bookArray by number of shelves so that each
  //  shelf has as close to the same number of books as possible
        const booksPerShelf = Math.floor(
          this.bookArray.length / this.numberOfShelves
        );
  // jStart: utilizes the i iterator to starts that the right index of the bookArray to 
  // each consecutive shelf
        let jStart = i * booksPerShelf;
        for (let j = jStart; j < jStart + booksPerShelf; j++) {
  //creates new book and calls each book's Book class render method to apply those styles to each book
  // and adds each of them to the current shelf
          const newBook = document.createElement("div");
          const renderedBook = this.bookArray[j].render();
          newBook.replaceChildren(renderedBook);
          shelfArray[i].append(newBook);
        }
  // Each shelf is add to the shelves element of the bookShelf
        shelves.append(shelfArray[i]);
      }
  // All elements are added to either the bookShelf of the message box, and those are
  // appended to the main element
      bookShelf.append(shelves);
      main.replaceChildren(bookShelf);
    }
  
  // renderFaves: copies most of above render() method, but uses it to create 
  // faveBook array. Replaces bookArray with faveArray when needed
    renderFaves() {
      const main = document.querySelector(".bookShelf");
      main.className = "main";
  
      const bookShelf = document.createElement("section");
      bookShelf.className = "bookShelf";
  
      const shelves = document.createElement("section");
      shelves.className = "shelves";
  
      for (let i = 0; i < this.numberOfShelves; i++) {
        const shelfArray = [];
        shelfArray[i] = document.createElement("div");
        shelfArray[i].className = "shelfArray";
        const booksPerShelf = Math.floor(
          this.bookArray.length / this.numberOfShelves
        );
        let jStart = i * booksPerShelf;
        for (let j = jStart; j < this.faveArray.length; j++) {
          const newBook = document.createElement("div");
          const renderedBook = this.faveArray[j].render();
          newBook.replaceChildren(renderedBook);
          shelfArray[i].append(newBook);
        }
        shelves.append(shelfArray[i]);
      }
  
      bookShelf.append(shelves);
      main.replaceChildren(bookShelf);
    }

    renderSearch() {
        const main = document.querySelector(".bookShelf");
        main.className = "main";
    
        const bookShelf = document.createElement("section");
        bookShelf.className = "bookShelf";
    
        const shelves = document.createElement("section");
        shelves.className = "shelves";
    
        for (let i = 0; i < this.numberOfShelves; i++) {
          const shelfArray = [];
          shelfArray[i] = document.createElement("div");
          shelfArray[i].className = "shelfArray";
          const booksPerShelf = Math.floor(
            this.bookArray.length / this.numberOfShelves
          );
          let jStart = i * booksPerShelf;
          for (let j = jStart; j < this.searchArray.length; j++) {
            const newBook = document.createElement("div");
            const renderedBook = this.searchArray[j].render();
            newBook.replaceChildren(renderedBook);
            shelfArray[i].append(newBook);
          }
          shelves.append(shelfArray[i]);
        }
    
        bookShelf.append(shelves);
        main.replaceChildren(bookShelf);
      }
  }