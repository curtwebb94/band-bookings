import { getBands, getVenues } from "./database.js"


const bands = getBands()

export const Bands = () => {
    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }

    bandHTML += "</ul>"

    return bandHTML
}