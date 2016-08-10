import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
    {
        "id": 1,
        "title": "a",
        "author": "author1",
        "publication": "publication year 1",
        "genre": "genre1",
        "links": "link1",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 2,
        "title": "title2",
        "author": "author2",
        "publication": "publication year 2",
        "genre": "genre2",
        "links": "link2",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 3,
        "title": "title3",
        "author": "author3",
        "publication": "publication year 3",
        "genre": "genre3",
        "links": "link3",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 4,
        "title": "title4",
        "author": "author4",
        "publication": "publication year 4",
        "genre": "genre4",
        "links": "link4",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 5,
        "title": "title5",
        "author": "author5",
        "publication": "publication year 5",
        "genre": "genre5",
        "links": "link5",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (book) => {
  debugger;
  return replaceAll(book.title, ' ', '-');
};

class BookApi {
  static getAllBooks() {
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    debugger;
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBookTitleLength = 1;
        if (book.title.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingBookIndex = books.findIndex(a => a.id == book.id);
          books.splice(existingBookIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new books in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId(book);
          book.watchHref = `http://www.pluralsight.com/books/${book.id}`;
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  //.....
  static searchBook(query) {
    debugger;
    const foundBooks = []; 

    for(var i=0;  i<books.length; i++) {

            for (var j in Object.keys(books[i])) {
                 var prop = Object.keys(books[i])[j];  
                if (books[i][prop]=== query) {
                    foundBooks.push(books[i]); 
                }
            }
        }



    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], foundBooks));
      }, delay);
    });

  }

  
}

export default BookApi;
