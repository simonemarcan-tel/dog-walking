import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`


    }

    petHTML += "</ul>"

    return petHTML

}

//event listener who demonstrates a pet's bark in an alert 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    window.alert(`${pet.name} barks at you!`)
                }
            }
        }
    }
)

