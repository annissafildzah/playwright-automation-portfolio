const { test, expect } = require('../../helpers/fixtures');
const authData = require('../data/auth.data');
const authStructure = require('../structures/auth.structure');

test.describe('auth testing', () => {
    test('should be successful to create new token', async ({ request }) => {
        const response = await request.post('/auth', {
            data: authData.validUserData
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        expect(responseJson).toHaveStructure(authStructure.validDataAuthResponse);
    });


    test('should be unsuccessful to create new token', async ({ request }) => {
        const response = await request.post('/auth', {
            data: authData.invalidUserData
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        expect(responseJson).toHaveStructure(authStructure.invalidDataAuthResponse);
    });
});