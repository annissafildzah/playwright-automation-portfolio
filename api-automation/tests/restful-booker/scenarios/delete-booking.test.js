const { test, expect } = require('../../helpers/fixtures');
const authData = require('../data/auth.data');
const bookingData = require('../data/booking.data');

test.describe('create new booking testing', () => {
    let id;
    let token;
    test.beforeAll('Login to get token', async ({ request }) => {
        const response = await request.post('/auth', {
            data: authData.validUserData
        });
        const responseJson = await response.json();
        token = await responseJson.token;
        const responseCreated = await request.post('/booking', {
            data: bookingData.createdBookingData
        });
        const responseJson2 = await responseCreated.json();
        id = await responseJson2.bookingid;
    })
    test('should be successful to delete existing booking', async ({ request }) => {
        const response = await request.delete(`/booking/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                Cookie: `token=${token}`
            },
        });
        expect(response.status()).toBe(201);
    });
});