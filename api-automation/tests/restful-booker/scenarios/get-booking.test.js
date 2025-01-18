const { test, expect } = require('../../helpers/fixtures');
const bookingData = require('../data/get-booking.data');
const getBookingStructure = require('../structures/get-booking.structure');

test.describe.only('get booking testing', () => {
    let id;
    test('should be successful to get all bookings', async ({ request }) => {
        const response = await request.get('/booking', {});
        const responseJson = await response.json();
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

    test.only('should be successful to get booking by id', async ({ request }) => {
        const response = await request.get(`/booking/935`, {});
        const responseJson = await response.json();
        expect(response.status()).toBe(200);
        await expect(responseJson).toHaveStructure(getBookingStructure.getBookingDetailRes);
    });
});