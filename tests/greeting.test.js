const request = require('supertest');
const app = require('../src/app');
describe('GET /greeting', () => {
    it('should respond with a greeting', async () => {
        const response = await request(app).get('/greeting');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, Manjunath!' });
    });
    
});
