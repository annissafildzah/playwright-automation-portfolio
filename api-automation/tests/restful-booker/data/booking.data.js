export const bookingParams = {
    name: 'firstname=John&lastname=Smith',
    date: 'checkin=2013-02-23'
}

export const createdBookingData = {
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
}

export const updatedFullBookingData = {
    firstname: "Jim",
    lastname: "Blue",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
    },
    additionalneeds: "No Breakfast"
}

export const updatedPartialBookingData = {
    firstname: "Jim",
    lastname: "Black",
}