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
});