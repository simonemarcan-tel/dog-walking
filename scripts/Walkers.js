import { getWalkerCities, getWalkers, getCities } from "./database.js"
import { CityList } from "./CityList.js"


// the event listener allows an event, such as a popup on the screen, to occur
/* 
    here, we state that if a "click" occurs, we will return an alert
    ********if the id starts with "walker"
*/
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        console.log(itemClicked.id)

        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")
            thoseWalkers(walkerId)
        }
    }
)

const walkers = getWalkers()
//here, we invoke the getWalkers Function and store its value in a variable

/*
    we will iterate through the list of walkers. for each walker, we will list
    the walker Id and name in <li> tags.
*/

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

/*
    for each asignment, if the walker Id property is equal, we will
    push the assignment into the assignments array
*/
const walkerCities = getWalkerCities()
const cities = getCities()

const filterCitiesByWalker = (walker) => {
    const assignments = []
    for (const assignment of walkerCities) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }
    return assignments
}
const assignedCityNames = (assignments) => {
    let cityNames = ""
    for (const city of cities) {
        for (const assignment of assignments) {

            if (city.id === assignment.cityId) {
                cityNames += `${city.name}, `
            }
        }
    }
    return cityNames
}

const thoseWalkers = (walkerId) => {
    for (const walker of walkers) {
        if (walker.id === parseInt(walkerId)) {
            const assignments = filterCitiesByWalker(walker)
            const cities = assignedCityNames(assignments)
            window.alert(`${walker.name} services ${cities}`)
        }
    }
}
// type of event
    //(clickEvent) => {

    //The target of a click event is the most specific HTML element
    //that was clicked by the user.
 
//const itemClicked = clickEvent.target


    //Only run the rest of the logic if a walker <li> was clicked
 
//if (itemClicked.id.startsWith("walker")) {

    
        //Extract the primary key from the id attribute of the list
        //item that you clicked on. Refer back to the code you
        //wrote for each list item. Note the format of the id
        //attribute ("walker--2" if you clicked on the second one).

       // This code splits that string apart into an array, and
        //captures the "2" and assigns it to be the value of the
        //`walkerId` variable.

        //Splitting a string in JavaScript:
            //https://www.youtube.com/watch?v=u2ZocmM93yU

        //Destructuring in JavaScript:
            //https://www.youtube.com/watch?v=UgEaJBz3bjY
    
    //const [, walkerId] = itemClicked.id.split("--")

    
       // Now that you have the primary key of a walker object,
        //find the whole object by iterating the walkers array.
    
    //for (const walker of walkers) {

        
            //ompare the primary key of each walker to the one
            //you have. As soon as you find the right one, display
            //the window alert message.
        
        //if (walker.id === parseInt(walkerId)) {
            //window.alert(`${walker.name} services ${walker.city}`)
 