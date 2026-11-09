// Books for bookstore API
let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        copiesAvailable: 5
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        copiesAvailable: 3
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        copiesAvailable: 7
    }
    // Add more books if you'd like!
];

/* Create your REST API here with the following endpoints:
    'GET /api/books': 'Get all books',
    'GET /api/books/:id': 'Get a specific book',
    'POST /api/books': 'Add a new book',
    'PUT /api/books/:id': 'Update a book',
    'DELETE /api/books/:id': 'Delete a book'
*/

// Creating the express server
const express = require('express');
const app = express();
// Starts server on port 3,000
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Book API server running at http://localhost:${port}`);
});

// Root endpoint - API homepage
app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome to the Book API", 
        endpoints: { 
            "GET /books": "Get all books", 
            "GET /books/:id": "Get a specific book by ID" 
        } 
    }); 
});

// GET /books - Return all Books
app.get('/books', (req, res) => {
      // Sends back the books as JSON as the response to the request
      res.json(books);
});










