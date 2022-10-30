// Creates Book class
class Book {
    constructor(author, title, language, subject) {
      this.author = author;
      this.title = title;
      this.language = language;
      this.subject = subject;
      this.isFavorite = false;
    }
    // render: creates the style and dimenstions of each book to later be added to the bookshelf
    render() {
      // randomColor: creates a random color so that each book is a unique color everytime the page is loaded
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const book = document.createElement("div");
      book.className = "book";
      book.style.backgroundColor = `#${randomColor}`;
  
      const bookInfo = document.createElement("div");
      bookInfo.className = "bookInfo";
  
      const bookTitle = document.createElement("h1");
      bookTitle.className = "bookTitle";
      bookTitle.textContent = `${this.title}`;
  
      // bookAuthor and bookSubjects: have a display of none because they aren't
      // intended to be seen until a book is inspected
      const bookAuthor = document.createElement("h2");
      bookAuthor.textContent = `by ${this.author}`;
      bookAuthor.style.display = "none";
  
      const bookSubjects = document.createElement("p");
      bookSubjects.textContent = `Subjects: ${this.subject}`;
      bookSubjects.style.display = "none";
      // bookAuthor and bookSubjects go inside the bookTitle parent element
      bookInfo.append(bookTitle, bookAuthor, bookSubjects);
  
      // faveSwitch: creates a button and an event listener so that when the button is clicked
      // it turns red and the isFavorite constructor of the Book class changes to true
      const faveSwitch = document.createElement("button");
      faveSwitch.className = "faveSwitch";
      faveSwitch.type = "checkbox";
  
      // this if statement keeps the books favorite button red after the booksheld is re-rendered
      if (this.isFavorite === true) {
        faveSwitch.style.background = "red";
      }
  
      faveSwitch.addEventListener("click", () => {
        this.isFavorite = true;
        faveSwitch.classList.toggle("toggledFaveSwitch");
      });
  
  
  // book.addEventListener: when the book element is clicked, the book and bookTitle elements 
  // are enlarged, and bookSubjects and bookDisplay becoem visible w/display = "inline"
      book.addEventListener("click", function () {
        book.classList.add = "bookInspect";
      // classNames used to handle changes via CSSW
        book.className = "bookBig";
        bookInfo.className = "bigBookInfo"
  
      // one liner changes are kept in this file instead of javascript
        bookTitle.style.fontSize = "30px";
        bookAuthor.style.display = "inline";
        bookSubjects.style.display = "inline";
        faveSwitch.style.width = "50%"
       
        // })
  
      // second/inner evenlistener: when the enlarged book is then double clicked, the styling from the last
      // eventlistener is returned to normal
        book.addEventListener("dblclick", function () {
          book.className = "book";
          bookInfo.className = "bookInfo"
          bookTitle.style.fontSize = "1px";
          bookAuthor.style.display = "none";
          bookSubjects.style.display = "none";
        });
      });
  // all the elements of book(and their children) are appended to the book element
  // which is returned so that it can be used when the render method is called
      book.append(bookInfo, faveSwitch);
      return book;
    }
  }