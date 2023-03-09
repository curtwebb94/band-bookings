import { getBands, getVenues } from "./database.js"

const venues = getVenues()

export const Venues = () => {
    let venueHTML = "<ul>"

    for (const venue of venues) {
        venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    venueHTML += "</ul>"

    return venueHTML
}
