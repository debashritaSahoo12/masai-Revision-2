// You have been provided with a script that is intended to handle a system for tracking book collections in a small library. The script uses arrays and objects to manage information but contains logical errors and syntax misuse, especially around ES6 features.
// Steps:

//     Debug and improve the addBook method to ensure all books added are valid and fully specified.
//     Read about the methods provided above in MDN
//     Review and correct the output of the system based on operations performed.
//     Refactor the code for better error handling and data integrity.


const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Book information is incomplete.");

      return;
    }
    let isPresent = this.books.find((b) => b.title ===book.title);
    if(isPresent){
      console.log("This book is all ready present.")
    }else{
      this.books.push(book)
      console.log("Book added")
    }

  },

  findBookByTitle(title) {
     let isPresent=this.books.find((book) => book.title === title) 
     if(isPresent){
      console.log(isPresent)
     }else{
console.log("This Book is not present here.")
     }
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      console.log("Book not found.");
    }
  },
};

library.addBook({ author: "Mulk Raj Anand", year: 1949, title: "Untouchable" })
library.findBookByTitle("The Hobit");
library.findBookByTitle("The Hobbit");
library.removeBook("The Hobbit");
console.log(library.books.length);
console.log(library.books)
