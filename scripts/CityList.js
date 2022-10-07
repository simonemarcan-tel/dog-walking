import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

/*
this getWalkerCities import affected whether my click event returned
undefined or the name of the city. because i forgot to import
the getWalkerCities to this function, no city was returned when 
each walker was clicked on.
*/

const walkers = getWalkers()
const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const currentCity of cities) {
        citiesHTML += `<li>${currentCity.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

