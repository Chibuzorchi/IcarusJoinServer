const { test, expect } = require('@playwright/test');

test.describe('Join Icarus', () => {
    test('should join successfully with valid data', async ({ request }) => {
        const response = await request.post('/join', {
            data: {
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123'
            }
        });

        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.message).toBe('User joined successfully');
    });

    test('should fail to join with missing data', async ({ request }) => {
        const response = await request.post('/join', {
            data: {
                username: '',
                email: 'testuser@example.com',
                password: 'password123'
            }
        });

        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.error).toBe('All fields are required');
    });
});
