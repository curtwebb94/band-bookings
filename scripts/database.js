/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/

const database = {
    bands: [{
        id: 1,
        name: "Blink 182",
        members: 3,
        venueId: 4,
        genre: "punk",
        debut: "1992",
        bookingId: 2
    }, {
        id: 2,
        name: "The Rockers",
        members: 4,
        genre: "rock",
        VenueId: 1,
        debut: "2012",
        bookingId: 7
    }, {
        id: 3,
        name: "Backroaders",
        members: 2,
        venueId: 3,
        genre: "country",
        debut: "2022",
        bookingId: 6
    }, {
        id: 4,
        name: "Tiny Turtles",
        members: 3,
        venueId: 1,
        genre: "rock",
        debut: "2009",
        bookingId: 4
    }, {
        id: 5,
        name: "iJesus",
        members: 5,
        venueId: 3,
        genre: "worship",
        debut: "2019",
        bookingId: 3
    }, {
        id: 6,
        name: "Bleeding Heart",
        members: 3,
        venueId: 2,
        genre: "rock",
        debut: "2022",
        bookingId: 8
    }, {
        id: 7,
        name: "Expiration",
        members: 4,
        venueId: 5,
        genre: "screamo",
        debut: "2016",
        bookingId: 1
    }],

    venues: [
        {id:1, name:"BlueBird", sqFootage:"2000 sq foot", maxOccup:200, showtime: "11:00pm"},
        {id:2, name:"The Dungeon", sqFootage:"700 sq foot", maxOccup:60, showtime: "10:00pm"},
        {id:3, name:"Mac's Cafe", sqFootage:"1000 sq foot", maxOccup:80, showtime: "1:00pm"},
        {id:4, name:"Rock Farm", sqFootage:"2500 sq foot", maxOccup:230, showtime: "10:00pm"},
        {id:5, name:"Hades' Home", sqFootage:"1300 sq foot", maxOccup:100, showtime: "11:00pm"}
         ],

         bookings: [
            {id:1, bandName:"Expiration",  date: "March 12, 2023"},
            {id:2, bandName:"Blink 182",  date: "March 17, 2023"},
            {id:3, bandName:"iJesus",  date: "March 11, 2023"},
            {id:4, bandName:"Tiny Turtles",  date: "March 13, 2023"},
            {id:5, bandName:"Blink 182",  date: "March 25, 2023"},
            {id:6, bandName:"Backroaders",  date: "March 9, 2023"},
            {id:7, bandName:"The Rockers",  date: "March 27, 2023"},
            {id:8, bandName:"Bleeding Heart",  date: "March 5, 2023"},
            {id:9, bandName:"iJesus",  date: "March 30, 2023"}
             ],

    
}

export const getBands = () => {
    return database.bands.map(bands => ({ ...bands }))
}

export const getVenues = () => {
    return database.venues.map(venues => ({ ...venues }))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({ ...bookings }))
}