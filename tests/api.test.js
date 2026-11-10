// Importing express app
const request = require('supertest');
const app = require('../server.js');

// jest test using supertest
describe('Book API', () => {
    // Tests for GET
    test('should return all books', async () => {
    const response = await request(app).get('/api/books');

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(3);
});
    test('should return book by ID', async () => {
    const response = await request(app).get('/api/books/1');
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('title');
});
    test('should handle error when book ID is not found', async () => {
    const response = await request(app).get('/api/books/999');
  
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
});
    // Test for POST
    test('should create a new book', async () => {
    const newBook = {
        title: "Beloved",
        author: "Toni Morrison",
        genre: "Fiction",
        copiesAvailable: 10
    };

    const response = await request(app)
        .post('/api/books')
        .send(newBook);
  
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Beloved');
});
    // Test for PUT
    test('should update existing book', async () => {
    const updatedBook = {
        title: "The Great Gatsby",
        author: "F. Scott Fitsgerald",
        genre: "Fiction",
        copiesAvailable: 1
    };

    const response = await request(app)
        .post('/api/books/1')
        .send(updatedBook);
  
        expect(response.status).toBe(200);
        expect(response.body.copiesAvailable).toBe(1);
});
    // Test for DELETE
    test('should delete existing book', async () => {
    const response = await request(app).delete('/api/books/1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
});

});