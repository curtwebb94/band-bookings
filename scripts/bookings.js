import { getBands, getVenues, getBookings } from "./database.js";

// Get copy of state for use in this module
const bands = getBands()
const venues = getVenues()
const bookings = getBookings()




// Function whose responsibility is to find the walker assigned to a pet
const findBand = (bands, venues) => {
    let performers = null

    for (const band of bands) {
        if (band.venueId === venues.id) {
            performers = band
        }
    }

    return performers
}

const findBookings = (bands) => {
    let shows = null

    for (const book of bookings) {
        if (book.id === bands.bookingId) {
            shows = book
        }
    }

    return shows
}



export const Bookings = () => {
    let bookingsHTML = ""
    bookingsHTML = "<ul>"

    for (const venue of venues) {
        const performingBand = findBand(bands, venue)

        
            const performances = findBookings(performingBand)


            bookingsHTML += `
            <li>
                ${venue.name} is being booked by
             ${performingBand.name} at ${venue.showtime} on ${performances.date}
            </li>
        `
        }
    
    bookingsHTML += "</ul>"

    return bookingsHTML
}