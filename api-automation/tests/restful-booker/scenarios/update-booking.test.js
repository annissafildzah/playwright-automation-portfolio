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
        const responseGet = await request.get('/booking', {});
        const responseJson2 = await responseGet.json();
        id = responseJson2[0].bookingid;
    })

    test('should be successful to update existing booking', async ({ request }) => {
        const response = await request.put(`/booking/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Cookie: `token=${token}`
            },
            data: bookingData.updatedFullBookingData
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(createBookingStructure.bookingRes);
    });

    test('should be successful to partial update existing booking', async ({ request }) => {
        const response = await request.patch(`/booking/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Cookie: `token=${token}`
            },
            data: bookingData.updatedPartialBookingData
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(createBookingStructure.bookingRes);
    });
});