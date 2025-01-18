const ss = require('superstruct');

const bookingObject = ss.object({
    bookingid: ss.integer()
})

export const getBookingResponse = ss.array(bookingObject)

const datePattern = ss.pattern(ss.string(), `^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$`)

const bookingDates = ss.object({
    checkin: datePattern,
    checkout: datePattern
})

export const getBookingDetailRes = ss.object({
    firstname: ss.string(),
    lastname: ss.string(),
    totalprice: ss.integer(),
    depositpaid: ss.boolean(),
    bookingdates: bookingDates,
    additionalneeds: ss.string()
})