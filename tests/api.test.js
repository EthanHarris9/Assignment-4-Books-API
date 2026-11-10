const request = require('supertest');
const app = require('../server.js');

describe('Book API', () => {
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

});