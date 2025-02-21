const { test, expect } = require('../../helpers/fixtures');
const authData = require('../data/auth.data');
const bookingData = require('../data/booking.data');
const createBookingStructure = require('../structures/create-booking.structure');

test.describe('create new booking testing', () => {
    let id;
    let token;
    test.beforeAll('Login to get token', async ({ request }) => {
        const response = await request.post('/auth', {
            data: authData.validUserData
        });
        const responseJson = await response.json();
        token = await responseJson.token;
    })
    test('should be successful to create new booking', async ({ request }) => {
        const response = await request.post('/booking', {
            data: bookingData.createdBookingData
        });
        const responseJson = await response.json();
        id = await responseJson.bookingid;
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(createBookingStructure.createdBookingRes);
    });

    test.afterAll('should be successful to delete existing booking', async ({ request }) => {
        const response = await request.delete(`/booking/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                Cookie: `token=${token}`
            },
        });
        expect(response.status()).toBe(201);
    });
});