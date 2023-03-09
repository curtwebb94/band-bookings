import { Venues } from "./venues.js";
import { Bands } from "./bands.js";
import { Bookings } from "./bookings.js";

const mainContainer = document.querySelector("#container")


const newVenues = Venues()
const newBands = Bands()
const newBookings = Bookings()

const applicationHTML = `
<h1>Pour some Sugar on me Tour</h1>
<article class="bookings">
    <h2>Current Bookings</h2>
    ${newBookings}
</article>

<article class="details">
    <section class="detail--column list details__cities">
        <h2>The Venues</h2>
        ${newVenues}
    </section>
    <section class="detail--column list details__cities">
        <h2>The Bands</h2>
        ${newBands}
    </section>
</article>


`

mainContainer.innerHTML = applicationHTML

