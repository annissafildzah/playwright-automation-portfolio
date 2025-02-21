const { test, expect } = require('../../helpers/fixtures');
const bookingData = require('../data/booking.data');
const getBookingStructure = require('../structures/get-booking.structure');

test.describe('get booking testing', () => {
    let id;
    test('should be successful to get all bookings', async ({ request }) => {
        const response = await request.get('/booking', {});
        const responseJson = await response.json();
        id = responseJson[0].bookingid;
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(getBookingStructure.getBookingResponse);
    });

    test('should be successful to get booking by name', async ({ request }) => {
        const response = await request.get('/booking', {
            params: bookingData.bookingParams.name
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(getBookingStructure.getBookingResponse);
    });

    test('should be successful to get booking by checkin date', async ({ request }) => {
        const response = await request.get('/booking', {
            params: bookingData.bookingParams.date
        });
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(getBookingStructure.getBookingResponse);
    });

    test('should be successful to get booking by id', async ({ request }) => {
        const response = await request.get(`/booking/1000`, {});
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(getBookingStructure.getBookingDetailRes);
    });
});