
// Creates a new instance of a Bookshelf called bookshelf1
const bookshelf1 = new Bookshelf(5)
// Adds the bookData array from book-data.js and
// applies it the the bookArray constructor
bookshelf1.stockShelves(bookData)

// Creates a book instance from the Book class, then uses
// the addBook method from the Bookshelf class to add the book to
// its bookArray
const AmericanPsycho = new Book(["Ellis, Bret Easton"], "American Psycho", "e~",["sick","psychological"])
bookshelf1.addBook(AmericanPsycho)

// Creates another book with arguments that help test sort functions
const zBook = new Book(["ZZ, Z"], "Z", "e~",["1 subject"])
bookshelf1.addBook(zBook)

// calls new sinstance of Bokshelf, bookshelf1's render method to create the instance of the Bookshelf on the page
bookshelf1.render()